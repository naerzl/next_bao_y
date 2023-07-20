// Oauth1.0需要的cusumer参数
export interface OAuth1Cusumer {
  key: string
  secret: string
}

// oauth1.0初始化token方法参数
export interface OAuth1InitiateRequestData<T> {
  request_data: OAuth1RequestDataType<T>
  url: string
  _next?: string
}

// Oauth1.0加密request_data的类型
export interface OAuth1RequestDataType<T> {
  url: string
  method: string
  data: T
}

// 第一步数据类型
export interface OAuth1FirstDataType {
  oauth_callback: string
}

// 第三步数据类型
export interface OAuth1ThreeDataType {
  oauth_token: string
  oauth_verifier: string
}

// xapi类型
