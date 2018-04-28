import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql'
import VoteType from './vote-type'
export default new GraphQLObjectType({
  name: 'Poll',
  fields: {
    author: {type: GraphQLString},
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    options: {type: new GraphQLList(GraphQLString)},
    votes: {type: new GraphQLList(VoteType)}
  }
})