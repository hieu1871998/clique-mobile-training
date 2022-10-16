import { useGetHorses } from 'apis'
import { FilterBlock, SalesItem } from 'components'
import { Horse, HorseRequest } from 'interfaces'
import { useMemo, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

enum HorseType {
  Sale = 1,
  Lease = 2,
  Syndication = 3,
}

export const SalesContainer = () => {
  const [type, setType] = useState(HorseType.Sale)
  const [payload, setPayload] = useState<HorseRequest>({
    orderBy: 'publishedDate',
    orderDirection: 'desc',
    pageIndex: 0,
    pageSize: 30,
    typeIds: type || 1,
  })
  const { data: horsesResp, refetch, isFetching } = useGetHorses(payload)
  const horses = useMemo<Horse[]>(
    () => horsesResp?.pages?.reduce(
      (prev, curr) => [...prev, ...(curr?.data?.responseData || [])], []
    ),
    [horsesResp]
  )

  return (
    <Animated.View>
      <FilterBlock />
      <FlatList
        className='px-2 pb-20'
        data={horses}
        keyExtractor={
          (item, index) => `${item.id || ''}${index}`
        }
        renderItem={({ item: horse }) => (
          <View className='p-1 basis-1/2'>
            <SalesItem
              horse={horse}
              onPress={() => console.log(horse)}
            />
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => refetch()}
          />
        }
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around'
        }}
      />
    </Animated.View>
  )
}