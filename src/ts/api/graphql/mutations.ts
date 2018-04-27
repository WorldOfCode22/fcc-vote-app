import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import UserType from './types/user-type/user'
import createUser from './resolvers/mutations/user-mutations/create-user'
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
    }
  }
})