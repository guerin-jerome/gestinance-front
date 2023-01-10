export type ChannelOfCommunication = 'email' | 'phone'

export type RegisterData = {
  username: string
  password: string
  retapePassword: string
  channelOfCommunication: string
  phone?: string
  email?: string
  agreement: boolean
}
