export interface XapiType {
  version?: string
  id?: string
  actor: {
    mbox?: string
    openid?: string
    account?: {
      homePage: string
      name: string
    }
    name?: string
    objectType: 'Agent' | 'Group'
    member?: any[]
  }
  verb: {
    id: string
    display?: {
      'en-US'?: string
      es?: string
    }
  }
  object: {
    id: string
    objectType?: 'Activity'
    definition?: {
      name?: {
        'en-US': string
      }
      description?: {
        'en-US': string
      }
      type?: string
      moreInfo?: string
    }
  }
  timestamp?: Date
}
