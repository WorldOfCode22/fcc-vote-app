import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql'
import VoteType from './vote-type'
export default new GraphQLObjectType({
  name: 'Poll',
  fields: {
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    votes: {type: new GraphQLList(VoteType)}
  }
})