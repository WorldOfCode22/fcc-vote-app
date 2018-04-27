
import { User } from '../../../../mongoose/users';
import DatabaseHelpers from '../../../../helpers/database-helpers';


export default async function(parentVal: any, args: any){
  // get user
  let user = await User.findOne({username: args.username})
  if (user){
    // check password
    if(user.password === DatabaseHelpers.createHash(args.password)){
      return DatabaseHelpers.promiseJWTSign(JSON.stringify(user))
        .then(
          token => {return {payload: token}},
          err => { throw new Error('Token could not be generated')}
        )
    } else throw new Error('Invalid username or password')
  } else throw new Error('Invalid username or password')
}