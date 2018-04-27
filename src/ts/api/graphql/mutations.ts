import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import UserType from './types/user-type/user'
import TokenType from './types/token-type/token'
import createUser from './resolvers/mutations/user-mutations/create-user'
import createToken from "./resolvers/mutations/token-mutations/create-token";
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
    }
  }
})