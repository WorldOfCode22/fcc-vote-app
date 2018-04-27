import {GraphQLObjectType, GraphQLString} from 'graphql'

export default new GraphQLObjectType({
  name: 'User_Type',
  fields: {
    username: {type: GraphQLString}
  }
})