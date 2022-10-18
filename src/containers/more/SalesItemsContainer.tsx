import { useGetHorses } from 'apis'
import { MiniSalesItem } from 'components'
import { Horse, HorseRequest } from 'interfaces'
import { useMemo, useState } from 'react'
import { FlatList, RefreshControl, SafeAreaView, View, Text, Button } from 'react-native'
import { HorseType } from '../sales'
import { slice } from 'lodash'
import { Stepper, List } from '@ant-design/react-native'
import { Colors } from 'constants'

interface SaleItem {
  horse: Horse,
  quantity: number
}

export const SalesItemContainer = () => {
  const [type, setType] = useState(HorseType.Sale)
  const [payload, setPayload] = useState<HorseRequest>({
    orderBy: 'publishedDate',
    orderDirection: 'desc',
    pageIndex: 0,
    pageSize: 9,
    typeIds: type || 1,
  })
  const { data: horsesResp, refetch, isFetching } = useGetHorses(payload)
  const horses = useMemo<Horse[]>(
    () => horsesResp?.pages?.reduce(
      (prev, curr) => [...prev, ...(curr?.data?.responseData || [])], []
    ),
    [horsesResp]
  )

  const filteredHorses = useMemo<Horse[]>(
    () => slice(horses?.filter(horse => horse.price !== undefined && horse?.horseClassifieds === undefined), 0, 9),
    [horses]
  )
  const [items, setItems] = useState<SaleItem[]>([
    // {
    //   horse: filteredHorses?.[0],
    //   quantity: 1
    // },
    // {
    //   horse: filteredHorses?.[1],
    //   quantity: 3
    // },
    // {
    //   horse: filteredHorses?.[2],
    //   quantity: 2
    // }
  ])

  const onItemPress = (horse: Horse) => {
    const list = items
    if (list.find(item => item.horse.id === horse.id)) {
      const index = list.findIndex(item => item.horse.id === horse.id)
      list[index].quantity++

      console.log(list[index].quantity)

      setItems(list)
    } else {
      list.push({
        horse,
        quantity: 1
      })

      setItems(list)
    }
  }

  return (
    <SafeAreaView className='pb-16'>
      <FlatList
        className='p-2 pb-20'
        data={filteredHorses}
        keyExtractor={
          (item, index) => `${item.id || ''}${index}`
        }
        renderItem={({ item: horse }) => (
          <View className='p-1 basis-1/3'>
            <MiniSalesItem
              horse={horse}
              onPress={() => onItemPress(horse)}
            />
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => refetch()}
          />
        }
        numColumns={3}
      />
      {items?.length > 0 && (
        <>
          <View className='absolute w-full bottom-20'>
            <List>
              {items?.map(item => (
                <List.Item
                  key={item?.horse?.id}
                  extra={
                    <Stepper
                      min={0}
                      defaultValue={item?.quantity}
                      onChange={value => {
                        item.quantity = value
                        if (value === 0) {
                          const index = items.findIndex(i => i.horse.id === item.horse.id)
                          items.splice(index)
                        }
                      }}
                    />
                  }
                >
                  <Text numberOfLines={1}>{item?.horse?.name}</Text>
                  <Text>
                    {
                      (item?.horse?.totalPrice || item?.horse?.price)?.toLocaleString(
                        'en-AU', {
                          style: 'currency',
                          currency: 'AUD',
                          minimumFractionDigits: 0,
                        }
                      )
                    }
                  </Text>
                </List.Item>
              ))}        
            </List>
          </View>
          <View className='absolute w-full bottom-0 bg-white p-2 flex flex-row justify-between items-center'>
            <View>
              <Text className='text-lg font-poppins font-medium'>
                Total:&nbsp;
                <Text className='text-xl font-poppins font-semibold text-red-500'>
                  {
                    items?.map(item => parseInt(item.horse.price.toString() || item.horse.totalPrice.toString()) * item.quantity)
                    ?.reduce((prev, curr) => parseInt(prev as string) + parseInt(curr as string), 0)
                    .toLocaleString('en-AU', {
                      style: 'currency',
                      currency: 'AUD',
                      minimumFractionDigits: 0,
                    })
                  }
                </Text>
              </Text>
              <Text className='text-base'>
                Total quantity: <Text className='font-semibold'>{items?.length || 0} {items?.length > 1 ? 'items' : 'item'}</Text>
              </Text>
            </View>
            <Button
              color={Colors.Primary}
              title='Checkout'
            />
          </View>
        </>
      )}
    </SafeAreaView>
  )
}