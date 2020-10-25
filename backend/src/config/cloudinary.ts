import cloudinary from 'cloudinary'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
import {
  PATH_UPLOAD,
  PATH_UPLOAD_SHARP,
  CLOUDINARY_NAME,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET
} from '../config/enverioment'

cloudinary.v2.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET
})

export const uploads = async (file : string, filename: string) => {
  if (!fs.existsSync(PATH_UPLOAD)) {
    fs.mkdirSync(PATH_UPLOAD)
  }

  if (!fs.existsSync(PATH_UPLOAD_SHARP)) {
    fs.mkdirSync(PATH_UPLOAD_SHARP)
  }

  const sharpFile = path.join(PATH_UPLOAD_SHARP, filename)
  await sharp(file).resize({
    width: 600,
    fit: 'contain'
  })
    .jpeg()
    .toFile(sharpFile)

  return cloudinary.v2.uploader.upload(sharpFile, { resource_type: 'auto', folder: 'mapet', secure: true }).then(result => {
    fs.unlinkSync(file)
    fs.unlinkSync(sharpFile)
    return {
      url: result.secure_url,
      id: result.public_id
    }
  })
}
