import DatabaseHelpers from "../../../../helpers/database-helpers";

export default async function(parentVal: any, args: any){
  try{
    let userData = await DatabaseHelpers.promiseJWTVerify(args.token)
    if (userData._id === args.id){
      let deletedUser = await DatabaseHelpers.deleteUser(args.id)
      await DatabaseHelpers.deletePollList(userData.polls)
      return deletedUser
    } else {
      throw new Error('This is not your poll to delete')
    }
  } catch (e) {
    throw e
  }
}