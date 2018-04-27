/**
 * Schema layout defined for GQL
 */
import {GraphQLSchema} from 'graphql'
import root from './root'

export default new GraphQLSchema({
  query: root
})