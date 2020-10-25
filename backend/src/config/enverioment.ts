import path from 'path'
import fs from 'fs'
import { config } from 'dotenv'

if (fs.existsSync(`.env.${process.env.NODE_ENV}`)) {
  config({ path: `.env.${process.env.NODE_ENV}` })
} else if (fs.existsSync('.env')) {
  config({ path: '.env' })
}

export const PATH_UPLOAD = path.join(__dirname, '..', '..', 'uploads')
export const PATH_UPLOAD_SHARP = path.join(PATH_UPLOAD, 'sharp')

export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME || ''
export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY || ''
export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET || ''
