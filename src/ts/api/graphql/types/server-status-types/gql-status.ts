/**
 * File for defining the GQL Service Status Object Type for the ServerStatus Object Type to consume
 */

import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql'

export default new GraphQLObjectType({
  name: 'GQL_Service_Status',
  fields: {
    statusCode: {type: GraphQLInt},
    statusDescriptor: {type: GraphQLString}
  }
 })