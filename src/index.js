import mongoose from 'mongoose'
import express from 'express'
import apiRouter from './controllers/index'

const LOCAL_DB_URI = 'mongodb://localhost:27017/test'
const MLAB_DB_URI = 'mongodb://anakin:useforce@ds147469.mlab.com:47469/hell'
const PORT = 3030

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB server')

  const app = express()

  app.use(express.json())
  app.use('/api', apiRouter)

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })
})

try {
  mongoose.connect(LOCAL_DB_URI);
  console.log('Trying to connect MongoDB server');
} catch (err) {
  console.log('MongoDB server connection failed');
}