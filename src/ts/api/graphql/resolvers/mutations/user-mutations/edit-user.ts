import DatabaseHelpers from "../../../../helpers/database-helpers";

export default async function(parentVal: any, args: any){
  try{
    let userData = await DatabaseHelpers.promiseJWTVerify(args.token)
    let user = await DatabaseHelpers.getUserById(userData._id)
      user = args.user
      let savedUser = await DatabaseHelpers.saveUser(user)
      return savedUser
  } catch (e) {
    throw e
  }
}