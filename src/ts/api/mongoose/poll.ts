import {Schema, Document, model, Model} from 'mongoose'

export interface IVote {
  option: string,
  usersVoted: string[]
}
export interface IPoll {
  author?: string
  title?: string,
  options: string[],
  votes?: IVote[],
  createdAt?: number
}

export var PollSchema: Schema = new Schema({
  author: String,
  title: String,
  options: Array,
  votes: [
    {option: String, usersVoted: Array}
  ],
  createdAt: Number
});

export interface IPollModel extends IPoll, Document {
  //custom methods for your model would be defined here
}

export const Poll: Model<IPollModel> = model<IPollModel>("Poll", PollSchema);