import { ENDPOINTS } from 'constants'
import AxiosInstance from '../axios'

const { get } = AxiosInstance

export const getArticles = () =>
  get(ENDPOINTS.ARTICLES)