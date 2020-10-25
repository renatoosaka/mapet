import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '..', 'uploads'),
  filename: (_, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`

    cb(null, filename)
  }
})

const fileFilter = (_, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Unsupported file format'))
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 },
  fileFilter: fileFilter
})

export default upload
