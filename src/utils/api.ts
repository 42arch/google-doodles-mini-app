import { Doodle } from "./type"
import http from "./http"

export function fetchDataOfToday(): Promise<Doodle[]> {
  return new Promise((resolve, reject) => {
    http.get("/api/doodles/today").then(res => {
      if(res.statusCode === 200) {
        resolve(res.data as Doodle[])
      } else (
        reject('get data of today fails')
      )
    })
  })
}