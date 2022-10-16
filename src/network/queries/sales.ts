import { useInfiniteQuery } from '@tanstack/react-query'
import { BaseResponse, Horse, HorseRequest } from 'interfaces'
import { getHorses } from '../services'

enum CONSTANTS {
  HORSE_LIST = 'HORSE_LIST'
}

export const useGetHorses = (params: HorseRequest, pageSize?: number) =>
  useInfiniteQuery<BaseResponse<Horse[]>>(
    [CONSTANTS.HORSE_LIST, params],
    ({ pageParam = 0 }) => getHorses({
      ...params,
      pageSize: pageSize || 30,
      pageIndex: pageParam as number,
    }),
    {
      initialData: () => ({
        pages: [{ data: { responseData: [] } }],
        pageParams: [],
      }),
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.data?.responseData?.length < 30) {
          return undefined
        }
        return pages.length
      },
      refetchOnWindowFocus: false,
    },
  )