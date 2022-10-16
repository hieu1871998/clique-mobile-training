import { Dayjs } from 'dayjs'
import { Advertisement, OrderBy, OrderDirection } from 'interfaces'

export interface Article {
  content?: string
  description?: string
  id: number
  imageUrl?: string
  listCategory?: Category[]
  newsUrl?: string
  publicPrice?: number
  publicType?: number
  publishDate?: number
  publishDateString?: string
  source: Source
  status?: number
  title?: string
  feature?: boolean
  horseClassifieds?: Advertisement[]
  newsType?: {
    id: number
    name: string
  }

  attachment?: Media[]
}

export interface ArticleRequest {
  categoryIds?: number[]
  date?: string | number | Date | Dayjs
  fromDate?: number
  toDate?: number
  isSearch?: boolean
  keyWord?: string
  orderBy?: OrderBy
  orderDirection?: OrderDirection
  pageIndex?: number
  pageSize?: number
  sourceIds?: number[]
  status?: string
  isFeature?: boolean
  isSimple?: boolean
  minPrice?: string
  maxPrice?: string
  name?: string
  query?: string
  types?: number[]
  price?: string
  position?: number
  page?: number
}

export interface Source {
  id: number
  name: string
}

export interface Category {
  filterType: number
  id: number
  itemId: number
  name: string
  page?: string
}

export interface Media {
  fileRemoved?: number
  guid?: string
  id?: number
  originalFilename?: string
  typeOfMedia?: number
  uploader?: number
  url?: string
}

export interface ImageMedia {
  cdnLarge?: string
  cdnMedium?: string
  cdnOrigin?: string
  cdnSmall?: string
  contentType?: string
  fileRemoved?: number
  filename?: string
  id?: number
  localThumbnail?: string
  originalFilename?: string
  refId?: number
  source?: string
  thumbnail?: string
  typeOfMedia?: number
  uploadDate?: number
  uploader?: number
  url?: string
  fileUrl?: string
}

export interface Country {
  id?: number
  code?: string
  name?: string
}