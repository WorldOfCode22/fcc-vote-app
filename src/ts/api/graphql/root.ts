/**
 * exports the schema layout for the schema object
 */
import {GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql'
import ServerStatusResolver from './resolvers/server-status'
import ServerStatusType from './types/server-status-types/server-status'
import PollType from './types/poll-type/poll'
import UserType from './types/user-type/user'
import UserResolver from './resolvers/user-resolver'
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
    },
    Poll: {
      type: PollType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)}
      }
    }, 
    User: {
      type: UserType,
      args: {
        token: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentVal, args){
        return UserResolver(parentVal, args)
      }
    }
  }
})