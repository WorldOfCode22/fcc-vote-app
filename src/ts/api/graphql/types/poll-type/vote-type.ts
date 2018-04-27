import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql'

export default new GraphQLObjectType({
  name: 'Vote',
  fields: {
    options: {type: GraphQLString},
    usersVoted: {type: new GraphQLList(GraphQLString)}
  }
})