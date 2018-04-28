import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql'
import PollType from '../poll-type/poll'
export default new GraphQLObjectType({
  name: 'User_Type',
  fields: {
    username: {type: GraphQLString},
    polls: {type: new GraphQLList(PollType)}
  }
})