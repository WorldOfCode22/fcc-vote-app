import { User } from "../../../../mongoose/users";
import {createHmac} from 'crypto'
import selector from '../../../../.env/.env'

let env = selector("DEV")
export default async function(parentVal: any, args: any){
  // check username is not taken
  let user = await User.findOne({username: args.username})
  if (user) {
    throw new Error('Username Taken')
  } else {
    let newUser = new User({
      username: args.username,
      password: createHmac('sha256', env.http.hashString).update(args.password).digest('hex') 
    })
    return newUser.save()
      .then(
        (doc) => { return doc},
        err => {throw new Error('Could not save new User')}
      )
  }
}