import { ObjectId } from 'mongodb'

export interface RadiologyAnalysis {
  _id?: ObjectId
  userId: ObjectId
  imageUrl: string
  findings: string[]
  diagnosis: string
  recommendations: string[]
  createdAt: Date
}

export interface GeneratedArticle {
  _id?: ObjectId
  userId: ObjectId
  prompt: string
  content: string
  citations: string[]
  format: string
  createdAt: Date
}