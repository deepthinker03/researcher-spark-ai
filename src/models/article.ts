import { ObjectId } from 'mongodb'

export interface Article {
  _id?: ObjectId
  title: string
  authors: string[]
  abstract: string
  publicationDate: Date
  journal: string
  doi?: string
  url: string
  source: string
  keywords: string[]
  userId: ObjectId
  uploadedAt: Date
}

export interface ArticleAnalysis {
  _id?: ObjectId
  articleId: ObjectId
  userId: ObjectId
  summary: string
  keyFindings: string[]
  strengths: string[]
  weaknesses: string[]
  methodology: string
  createdAt: Date
}