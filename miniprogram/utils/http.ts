import { BASE_URL } from "./const"

function get(url: string ): Promise<any> {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method: "GET",
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

function post(url: string, params: object): Promise<any> {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method: "POST",
      data: params,
      success(res) {
        resolve(res.data)
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