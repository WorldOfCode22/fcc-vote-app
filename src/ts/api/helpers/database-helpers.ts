import selector from '../.env/.env'
import {sign, verify} from 'jsonwebtoken'
import {createHmac} from 'crypto'
import { Poll, IPollModel, IPoll } from '../mongoose/poll';
import { IUser, User, IUserModel } from '../mongoose/users';
import { resolve } from 'dns';

let env = selector("DEV")

export default class DatabaseHelpers{
  static createHash(str: string){
    let newStr = createHmac('sha256', env.http.hashString).update(str).digest('hex')
    return newStr 
  }

  static promiseJWTSign(payload: any): Promise<string>{
    return new Promise((resolve, reject) => {
      sign(payload, env.http.jwtCrypt, (err: Error, token: string) => {
        if (err) reject(err)
        else resolve(token)
      })
    })
  }

  static promiseJWTVerify(token: any): Promise<any>{
    return new Promise((resolve, reject) => {
      verify(token, env.http.jwtCrypt, (err: any, value: any) => {
        if (err) reject(err)
        else { resolve(value) }
      })
    })
  }
  static createPoll(author: string, title: string, options: string[]): Promise<IPollModel>{
    return new Promise((resolve, reject) => {
      let newPoll = new Poll({
        author,
        title,
        options,
        votes: [],
        createdAt: Date.now()
      })
      return newPoll.save()
        .then(
          (poll) => {resolve(poll)},
          err => {reject(new Error('New poll could not be saved'))}
        )
    })
  }

  static getUserById(id: string): Promise<IUserModel>{
    return new Promise(async(resolve, reject)=> {
      try{
        let user = await User.findById(id)
        console.log(user)
        if (user) resolve(user)
        else reject(new Error('Invalid ID'))
      } catch (e) {
        reject('A error occurred while getting your user data')
      }
    })
  }

  static saveUser(user: IUserModel){
    return new Promise((resolve, reject) => {
      user.save()
        .then(
          (doc) => { if (doc) resolve(doc)},
          err => reject(Error('Could not save user'))
        )
    })
  }

  static getPollById(id: string): Promise<IPollModel>{
    return new Promise((resolve, reject) => {
      Poll.findById(id)
        .then(
          (doc) => {
            if (doc) resolve(doc)
            else reject(new Error('Invalid ID'))
          },
          err => reject(new Error('An error occurred while getting poll'))
        )
    })
  }
  static getPollList(listOfPolls: string[]){
    return new Promise((resolve, reject) => {
      let promiseArr = []
      for (let i = 0; i < listOfPolls.length; i++){
        promiseArr.push(DatabaseHelpers.getPollById(listOfPolls[i]))
      }
      Promise.all(promiseArr)
        .then(
          (values) => { resolve(values)},
          err => { reject(err) }
        )
    })
  }

  static deletePollList(listOfPolls: string[]){
    return new Promise((resolve, reject) => {
      let promiseArr = []
      for (let i = 0; i < listOfPolls.length; i++){
        promiseArr.push(DatabaseHelpers.deletePoll(listOfPolls[i]))
      }
      Promise.all(promiseArr)
        .then(
          (values) => { resolve(values)},
          err => { reject(err) }
        )
    })
  }

  static deleteUser(id: string): Promise<IUserModel>{
    return new Promise(async(resolve, reject) => {
      try{
        let user = await DatabaseHelpers.getUserById(id)
        let removedUser = await user.remove()
        resolve(removedUser)
      } catch (e) {
        reject(e)
      }
    })
  }

  static deletePoll(id: string): Promise<IPollModel>{
    return new Promise(async(resolve, reject) => {
      try{
        let poll = await DatabaseHelpers.getPollById(id)
        let removedPoll = await poll.remove()
        resolve(removedPoll)
      } catch (e) {
        reject(e)
      }
    })
  }

  static savePoll(poll: IPollModel): Promise<IPollModel>{
    return new Promise(async(resolve, reject) => {
      try{
        let savedPoll = await poll.save()
        resolve(savedPoll)
      } catch(e) {
        reject(e)
      }
    })
  }
}