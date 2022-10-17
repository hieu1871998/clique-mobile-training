import { useGetHorses } from 'apis'
import { MiniSalesItem, SalesItem } from 'components'
import { Horse, HorseRequest } from 'interfaces'
import { useMemo, useState } from 'react'
import { RefreshControl, View } from 'react-native'
import { HorseType } from 'containers'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export const MoreContainer = () => {
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
    () => horses?.filter(horse => horse.price !== undefined && horse?.horseClassifieds === undefined),
    [horses]
  )

  return (
    <SafeAreaView>
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
        numColumns={3}
      />
    </SafeAreaView>
  )
}