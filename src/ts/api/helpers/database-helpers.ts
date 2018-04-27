import selector from '../.env/.env'
import {sign} from 'jsonwebtoken'
import {createHmac} from 'crypto'

let env = selector("DEV")

export default class DatabaseHelpers{
  static createHash(str: string){
    let newStr = createHmac('sha256', env.http.hashString).update(str).digest('hex')
    return newStr 
  }

  static promiseJWTSign(payload: any): Promise<Error | string>{
    return new Promise((resolve, reject) => {
      sign(payload, env.http.jwtCrypt, (err: Error, token: string) => {
        if (err) reject(err)
        else resolve(token)
      })
    })
  }
}