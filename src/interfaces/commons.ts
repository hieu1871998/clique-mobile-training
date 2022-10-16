import { Country, ImageMedia } from './article'

export type OrderBy = 'publishedDate' | 'name' | 'price' | 'value'
export type OrderDirection = 'asc' | 'desc'

export interface BaseResponse<T> {
  data: {
    responseData: T
    error?: ErrorResponse
  }
}

export interface ErrorResponse {
  message: string
  name: string
  ok: boolean
  status: number
  statusText: string
  url: string
  code?: number
}

export interface AudioMedia {
  cdnOrigin?: string
  contentType?: string
  external?: boolean
  fileRemoved?: number
  guid?: string
  id?: number
  isProcessing?: boolean
  originalFilename?: string
  typeOfMedia?: number
  uploadDate?: number
  uploader?: number
  url?: string
}

export interface BonusScheme {
  code: string
  description: string
  id: number
  media: ImageMedia
}

export interface DocumentMedia {
  cdnOrigin?: string
  contentType?: string
  fileRemoved?: number
  guid?: string
  refId?: number
  id?: number
  originalFilename?: string
  typeOfMedia?: number
  uploadDate?: number
  uploader?: number
  url?: string
  source?: string
}

export interface PedigreeMedia {
  cdnLarge?: string
  cdnMedium?: string
  cdnOrigin?: string
  cdnSmall?: string
  contentType?: string
  fileRemoved?: number
  filename?: string
  id?: number
  originalFilename?: string
  refId?: number
  source?: string
  typeOfMedia?: number
  uploadDate?: number
  uploader?: number
  url?: string
}

export interface State {
  id?: number
  countryId?: number
  name?: string
}

export interface Advertisement {

  address?: string
  avatar?: ImageMedia
  background?: ImageMedia
  banner?: ImageMedia
  businessName?: string
  categoryId?: number
  country?: Country
  description?: string
  email?: string
  id: number
  mobile?: string;
  postcode?: string
  publishedDate?: number
  showAll?: boolean
  status?: number
  submittedDate?: number
  suburb?: string
  types?: {
    id?: number
    type?: string
  }[]
  website?: string
  position?: number
}

export interface AdvertisementResponse {
  horseClassifieds: Advertisement[]
  publicType: number
}

export interface VideoMedia {
  id?: number
  external?: boolean
  cdnOrigin?: string
  originalFilename?: string
  refId?: number
  source?: string
  thumbnail?: string
  typeOfMedia?: number
  uploadDate?: number
  uploader?: number
  url?: string
}