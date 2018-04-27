/**
 * exports the schema layout for the schema object
 */
import {GraphQLObjectType, GraphQLString} from 'graphql'
import ServerStatusResolver from './resolvers/server-status'
import ServerStatusType from './types/server-status-types/server-status'
export default new GraphQLObjectType({
  name: 'Root_Query',
  fields: {
    ServerStatus: {
      type: ServerStatusType,
      args: {
        service: {type: GraphQLString}
      },
      resolve(parentVal, args){
        console.log(ServerStatusResolver(parentVal, args))
        return ServerStatusResolver(parentVal, args)
      }
    }
  }
})