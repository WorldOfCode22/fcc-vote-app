/**
 * Schema layout defined for GQL
 */
import {GraphQLSchema} from 'graphql'
import root from './root'
import mutations from './mutations'
export default new GraphQLSchema({
  query: root,
  mutation: mutations
})