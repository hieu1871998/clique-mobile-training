import { ENDPOINTS } from 'constants'
import { Article, ArticleRequest, BaseResponse } from 'interfaces'
import AxiosInstance from '../axios'

const { post } = AxiosInstance

export const getArticles = (payload: ArticleRequest): Promise<BaseResponse<Article[]>> =>
  post(ENDPOINTS.ARTICLES, payload)