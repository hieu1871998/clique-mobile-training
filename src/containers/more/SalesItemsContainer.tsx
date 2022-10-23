import { useGetHorses } from 'apis'
import { MiniSalesItem } from 'components'
import { Horse, HorseRequest } from 'interfaces'
import { useMemo, useReducer, useState } from 'react'
import { FlatList, RefreshControl, SafeAreaView, View, Text, Button } from 'react-native'
import { HorseType } from '../sales'
import { slice } from 'lodash'
import { Stepper, List } from '@ant-design/react-native'
import { Colors } from 'constants'
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated'

interface SaleItem {
  horse: Horse,
  quantity: number,
}

interface ItemAction {
  horse: Horse
  direction?: 'up' | 'down'
}

const reducer = (list: SaleItem[], action: ItemAction) => {
  switch (action.direction) {
    case 'up':
      if (list.find(item => item.horse.id === action.horse.id)) {
        const index = list.findIndex(item => item.horse.id === action.horse.id)
        list[index].quantity++
      } else {
        list.push({
          horse: action.horse,
          quantity: 1
        })
      }
    
      return list
    case 'down':
      const index = list.findIndex(i => i.horse.id === action.horse.id)
      list[index].quantity--

      if (list[index].quantity === 0) {
        list.splice(index, 1)
      }

      return list
    default:
      throw new Error('Invalid action')
  }
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
    () => slice(horses?.filter(horse => horse.price !== undefined && horse?.horseClassifieds === undefined), 0, 6),
    [horses]
  )
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <SafeAreaView className='w-full h-full pb-16'>
      <FlatList
        className='p-2'
        data={filteredHorses}
        keyExtractor={
          (item, index) => `${item.id || ''}${index}`
        }
        renderItem={({ item: horse }) => (
          <View className='p-1 basis-1/3'>
            <MiniSalesItem
              horse={horse}
              onPress={() => {
                dispatch({
                  horse,
                  direction: 'up'
                })
                refetch()
              }}
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
      {/* {state?.length > 0 && (
        <FlatList
          className='w-full absolute bottom-0'
          data={state}
          keyExtractor={
            (item, index) => `${item.horse.id || ''}${index}`
          }
          renderItem={({ item }) => (
            <View
              className='px-2 py-1 bg-white'
              key={item.horse.id}
            >
              <Text>
                <Text>{item.horse.name}</Text>]|[
                <Text>{item.quantity}</Text>
              </Text>
            </View>
          )}
        />
      )} */}
      {state?.length > 0 && (
        <Animated.View
          className='w-full absolute bottom-0'
          entering={FadeIn}
          exiting={FadeOut}
          layout={Layout.springify()}
        >
          <List renderFooter={() => (
            <View className='w-full bg-white p-2 flex flex-row justify-between items-center'>
              <View>
                <Text className='text-lg text-neutral-500 font-poppins font-medium'>
                  Total:&nbsp;
                  <Text className='text-xl font-poppins font-semibold text-primary-500'>
                    {
                      state?.map(item => parseInt(item.horse.price.toString() || item.horse.totalPrice.toString()) * item.quantity)
                      ?.reduce((prev, curr) => prev + curr, 0)
                      .toLocaleString('en-AU', {
                        style: 'currency',
                        currency: 'AUD',
                        minimumFractionDigits: 0,
                      })
                    }
                  </Text>
                </Text>
                <Text className='text-base text-neutral-500 font-poppins'>
                  Total quantity: <Text className='font-semibold'>{state?.length || 0} {state?.length > 1 ? 'items' : 'item'}</Text>
                </Text>
              </View>
              <Button
                color={Colors.Primary}
                title='Checkout'
              />
            </View>
          )}>
            {state?.map(item => item.quantity !== 0 && (
              <Animated.View
                key={item?.horse?.id}
                entering={FadeIn}
                exiting={FadeOut}
                layout={Layout.springify()}
              >
                <List.Item
                  key={item?.horse?.id}
                  extra={
                    <Stepper
                      min={0}
                      defaultValue={item?.quantity}
                      value={item.quantity}
                      onChange={value => {
                        dispatch({
                          horse: item.horse,
                          direction: value < item.quantity ? 'down' : 'up'
                        })
                        refetch()
                      }}
                      inputStyle={{
                        fontFamily: 'Poppins',
                        fontSize: 14
                      }}
                      styles={{
                        container: {
                          maxWidth: 96
                        }
                      }}
                    />
                  }
                >
                  <View className='mr-2'>
                    <Text className='font-medium text-neutral-500 font-poppins' numberOfLines={1}>{item?.horse?.name}</Text>
                    <Text className='font-poppins'>
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
                  </View>
                </List.Item>
              </Animated.View>
            ))}        
          </List>
        </Animated.View>
      )}
    </SafeAreaView>
  )
}