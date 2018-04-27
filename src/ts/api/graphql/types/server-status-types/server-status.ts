/**
 * File for defining the GQL ServerStatus Object Type
 */

 import {GraphQLObjectType, GraphQLInt} from 'graphql'
 import GQLServerStatus from './gql-status'
 
 export default new GraphQLObjectType({
   name: 'Server_Status',
   fields: {
     GQLService: {type: GQLServerStatus}
   }
  })