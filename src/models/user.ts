import { ObjectId } from 'mongodb'

export interface User {
  _id?: ObjectId
  name: string
  email: string
  passwordHash: string
  role: 'researcher' | 'admin'
  createdAt: Date
  updatedAt: Date
  lastLogin?: Date
  preferences?: {
    theme: 'light' | 'dark'
    defaultDatabase: string
  }
}

export interface UserQuery {
  _id?: ObjectId
  userId: ObjectId
  query: string
  response: string
  createdAt: Date
}