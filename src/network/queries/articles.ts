import { useQuery } from '@tanstack/react-query'
import { ArticleRequest } from 'interfaces'
import { getArticles } from '../services'

enum Constants {
  Articles = 'Articles'
}

export const useGetArticles = (payload: ArticleRequest) => useQuery(
  [Constants.Articles, payload],
  () => getArticles(payload),
)