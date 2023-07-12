export interface LrsOathRequestData_Data {
  oauth_callback?: string
  oauth_verifier?: string
  oauth_token?: string
}

export interface LrsOaurhRequestData {
  url: string
  method: string
  data: LrsOathRequestData_Data
}

export interface LrsOauthInitiate {
  url: string
  request_data: LrsOaurhRequestData
  router?: any
  _next?: string
}
