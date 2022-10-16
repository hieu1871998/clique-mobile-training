import { Dayjs } from 'dayjs'
import { ImageMedia } from './article'

export interface User {
  address?: string
  afslNumber?: string
  businessTypes?: BusinessTypes[]
  companyName?: string
  country?: string
  displayName?: string
  dob?: number | Dayjs
  email?: string
  emailEnquiry?: string
  emailNewsAnnouncements?: boolean
  emailSearchesWeekly?: boolean
  firstName?: string
  id?: number
  lastName?: string
  location?: string
  mediaAvatar?: ImageMedia
  avatarMediaId?: number
  mobile?: string
  postcode?: string
  prismAccountId?: number
  roles?: Role[]
  state?: string
  status?: number
  suburb?: string
  username?: string
  about?: string
}

export interface BusinessTypes {
  id: number
  type: string
}

export interface Role {
  id: number
  name: string
}