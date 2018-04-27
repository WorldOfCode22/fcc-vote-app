/**
 * Entry point to the application
 */
import express from 'express'
import expressGQL from 'express-graphql'
import { connect } from 'mongoose'
import envSelector from './.env/.env'
import GQLSchema from './graphql/schema'

// get env
let env = envSelector('DEV')

// start app instance
let app = express()

// connect to Database
connect(env.http.mongoURI)
  .then(
    () => {console.log('Database Connected')},
    err => {console.warn('Database Error: ' + err)}
  )
/**
 * middleware for application
 */

 app.use('/api', expressGQL({
   graphiql: env.http.GQL.graphiql,
   schema: GQLSchema
 }))

// app wait for request
app.listen(env.http.port, () => {
  console.log('HTTP Server active on port: ' + env.http.port)
})