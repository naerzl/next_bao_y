import OAuth from 'oauth-1.0a'
import CryptoJS from 'crypto-js'
import {
  OAuth1Cusumer,
  OAuth1FirstDataType,
  OAuth1InitiateRequestData,
  OAuth1ThreeDataType,
} from './types'

export const ACCESSTOKEN = 'access_token'

// oauth1.0的类
class LrsOauthClient {
  oauth: OAuth
  constructor(consumer: OAuth1Cusumer, signature_method: string) {
    this.oauth = new OAuth({
      consumer,
      signature_method,
      hash_function(base_string, key) {
        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64)
      },
    })
  }

  // 第一步 签名并初始化oauth_token
  async lrsOauthInitiate(obj: OAuth1InitiateRequestData<OAuth1FirstDataType>) {
    const signature = this.oauth.authorize(obj.request_data)
    // 转码签名里面的特殊字符
    signature.oauth_signature = encodeURIComponent(signature.oauth_signature)
    const data = await fetch(
      obj.url + `?${new URLSearchParams(signature as any).toString()}`
    ).then((res) => res.text())
    if (data) {
      let str = data + `&callback=${obj.request_data.data.oauth_callback}`
      return '/?' + str
    }
    return '/'
  }

  // 第三步 通过授权后的oauth_token换取access_token
  lrsGetAccessToken(obj: OAuth1InitiateRequestData<OAuth1ThreeDataType>) {
    const oAuthObj = this.oauth.authorize(obj.request_data)
    return fetch(
      `${obj.request_data.url}?${new URLSearchParams({
        ...obj.request_data.data,
        ...oAuthObj,
      } as any).toString()}`
    ).then((res) => res.text())
  }
}

export default LrsOauthClient
