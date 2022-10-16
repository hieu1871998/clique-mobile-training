import { ENDPOINTS } from 'constants'
import { BaseResponse, Horse, HorseRequest } from 'interfaces'
import AxiosInstance from '../axios'
import qs from 'qs'

const { get, post } = AxiosInstance

export const getHorses = async (params: HorseRequest): Promise<BaseResponse<Horse[]>> => {
  return get(ENDPOINTS.HORSE_LIST, {
    params,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'comma' }),
  })
}