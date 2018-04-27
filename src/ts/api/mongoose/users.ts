/**
 * logic for the user model
 */

import { Schema, Document, model, Model } from "mongoose"

export interface IUser {
  username?: string,
  password?: string,
  createdAt: number
}

export var UserSchema: Schema = new Schema({
  username: String,
  password: String,
  createdAt: Number
});

export interface IUserModel extends IUser, Document {
  //custom methods for your model would be defined here
}

export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);