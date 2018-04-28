import DatabaseHelpers from "../../../../helpers/database-helpers";

export default async function(parentVal: any, args: any){
  try{
  let userData = await DatabaseHelpers.promiseJWTVerify(args.token)
  let user = await DatabaseHelpers.getUserById(userData._id)
  let newPoll = await DatabaseHelpers.createPoll(user.username, args.title, args.options)
  user.polls.push(newPoll.id)
  let savedUser = await DatabaseHelpers.saveUser(user)
  return newPoll
  } catch (e) {
    throw e
  }
}