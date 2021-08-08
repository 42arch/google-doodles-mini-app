import Taro from '@tarojs/taro'
import { BASE_URL } from './const'

function get(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: BASE_URL + url,
      method: "GET",
      responseType: "text",
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

function post(url: string, data: object): Promise<any> {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: BASE_URL + url,
      method: "POST",
      responseType: "text",
      data: data,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export default {
  get,
  post
}