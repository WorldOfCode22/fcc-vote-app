import { GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
  name: 'JSON_Web_Token',
  fields: {
    payload: {type: GraphQLString}
  }
})