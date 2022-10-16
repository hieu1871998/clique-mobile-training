import { Category, Country, ImageMedia } from './article'
import { Advertisement, AudioMedia, BonusScheme, DocumentMedia, OrderBy, OrderDirection, PedigreeMedia, State, VideoMedia } from './commons'
import { User } from './user'

export interface Horse {

  age?: number
  approved?: boolean
  audioMedia?: AudioMedia[]
  avatar?: ImageMedia
  bonusScheme?: BonusScheme[]
  category?: Category
  colour?: Colour
  condition?: string
  countryLocation?: Country
  countryLocationId?: number
  countryOfBirth?: Country
  dam?: string
  description?: string
  documentMedia?: DocumentMedia[]
  emailEnquiry?: string
  expiredHorse?: boolean
  favorite?: boolean
  foalAtFoot?: boolean | number
  foalAtFootBy?: string
  foaled?: number
  headline?: string
  horseClassifieds?: Advertisement[]
  horseName?: string
  id: number
  imageMedia?: ImageMedia[]
  inFoal?: boolean | number
  inFoalTo?: string
  location?: string
  mediaIds?: number[]
  name?: string
  nickname?: string
  pdsApprovalLetterMedia?: ImageMedia
  pdsApprovalLetterMediaId?: number
  pdsExpiryDate?: number
  pedigreeMedia?: PedigreeMedia
  pedigreeMediaId?: number
  pinOnTop?: boolean
  pinRq?: boolean
  price?: number | string
  publicType?: number
  publishedDate?: number
  raceRecordMedia?: ImageMedia
  raceRecordMediaId?: number
  scoped?: boolean | number
  sex?: string
  sire?: string
  sold?: boolean
  source?: string
  state?: State
  status?: number
  submittedDate?: number
  totalPrice?: number
  trainerName?: string
  type?: { id?: number, type?: string }
  user?: User
  videoMedia?: VideoMedia[]
  x_Rayed?: boolean
}

export interface Colour {
  id?: number
  colour?: string
}

export interface HorseRequest {
  categoryIds?: number
  sexes?: string[]
  sires?: string[]
  dams?: string[]
  ages?: number[]
  countryId?: number
  stateIds?: number[]
  trainerNames?: string[]
  companyNames?: string[]
  bonusIds?: number[]
  isSearch?: boolean
  typeIds?: number
  orderBy?: OrderBy
  orderDirection?: OrderDirection
  pageSize?: number
  pageIndex?: number
  query?: string | string[]
  approved?: boolean
}