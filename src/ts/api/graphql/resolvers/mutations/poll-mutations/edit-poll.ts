import DatabaseHelpers from "../../../../helpers/database-helpers";

export default async function(parentVal: any, args: any){
  try{
    let userData = await DatabaseHelpers.promiseJWTVerify(args.token)
    let poll = await DatabaseHelpers.getPollById(args.id)
    if(userData._id === poll.id){
      poll = args.poll
      let savedPoll = await DatabaseHelpers.savePoll(poll)
      return savedPoll
    } else throw new Error('This is not your poll to edit')
  } catch (e) {
    throw e
  }
}