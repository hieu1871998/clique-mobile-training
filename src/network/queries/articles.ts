import { useQuery } from '@tanstack/react-query'
import { getArticles } from '../services'

enum Constants {
  Articles = 'Articles'
}

export const useGetArticles = () => useQuery(
  [Constants.Articles],
  () => getArticles(),
)