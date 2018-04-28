import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import UserType from './types/user-type/user'
import TokenType from './types/token-type/token'
import createUser from './resolvers/mutations/user-mutations/create-user'
import createToken from "./resolvers/mutations/token-mutations/create-token";
import PollType from './types/poll-type/poll'
import createPoll from './resolvers/mutations/poll-mutations/create-poll'
export default new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: {
      type: UserType,
      args: {
        username: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentVal, args){
        return createUser(parentVal, args)
      }
    },
    createToken: {
      type: TokenType,
      args: {
        username: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentVal, args){
        return createToken(parentVal, args)
      }
    },
    createPoll: {
      type: PollType,
      args: {
        token: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        options: {type: new GraphQLNonNull(new GraphQLList(GraphQLString))}
      },
      resolve(parentVal, args){
        return createPoll(parentVal, args)
      }
    }
  }
})