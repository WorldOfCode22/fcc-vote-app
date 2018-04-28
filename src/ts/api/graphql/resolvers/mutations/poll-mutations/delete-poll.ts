import DatabaseHelpers from "../../../../helpers/database-helpers";

export default async function(parentVal: any, args: any){
  try{
    let userData = await DatabaseHelpers.promiseJWTVerify(args.token)
    if (userData.polls.indexOf(args.id) > -1){
      let deletedPoll = await DatabaseHelpers.deletePoll(args.id)
      let user = await DatabaseHelpers.getUserById(userData._id)
      user.polls.splice(user.polls.indexOf(deletedPoll.id), 1)
      await DatabaseHelpers.saveUser(user)
      return deletedPoll
    } else {
      throw new Error('This is not your poll to delete')
    }
  } catch (e) {
    throw e
  }
}