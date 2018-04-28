import DatabaseHelpers from "../../helpers/database-helpers";

export default async function(parentVal: any, args: any){
  try{
    let userData = await DatabaseHelpers.promiseJWTVerify(args.token)
    let polls = await DatabaseHelpers.getPollList(userData.polls)
    userData.polls = polls
    return userData
  }catch (e){
    throw e 
  }
}