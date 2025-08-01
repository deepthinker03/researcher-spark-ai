import { ThemeContextType } from '../context/ThemeContext'

declare global {
  var _mongoClientPromise: Promise<MongoClient>
  
  interface Window {
    __themeContext?: ThemeContextType
  }
}

export {}