import express from 'express'
import envSelector from './.env/.env'

let env = envSelector('DEV')
let app = express()

app.listen(env.http.port, () => {
  console.log('HTTP Server active on port: ' + env.http.port)
})