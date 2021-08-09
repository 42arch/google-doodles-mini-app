import http from "./http"
import { Doodle } from "../type/Doodle.type"

export function getDoodlesOfToday():Promise<Doodle[]> {
  return new Promise((resolve, reject) => {
    http.get("/api/doodles/today").then(res => {
      resolve(res as Doodle[])
    }).catch(err => {
      reject(err)
    })
  })
}