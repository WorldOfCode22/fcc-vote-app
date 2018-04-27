
/**
 * File for the resolver to the GQL server status query
 */
// do not know correct types
export default function(parentVal: any, args: any){
  // add more logic later this is just a checker for right now
  let statusObj = {
      GQLService: {
        statusCode: 200,
        statusDescriptor: 'GQL Service up and running'
      }
  }
  return statusObj
}