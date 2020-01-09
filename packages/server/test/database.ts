import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

import logger from '../src/logger'

let mongoServer = null

const connect = async () => {
  mongoose.Promise = global.Promise

  mongoServer = new MongoMemoryServer()
  const mongoUri = await mongoServer.getUri()
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}

const disconnect = async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
}

mongoose.connection
  .on('open', () => logger.info('Connection opened'))
  .on('error', error => logger.error(error))
  .on('close', () => logger.warn('Connection closed'))
  .on('connected', () => logger.info('Database connected'))
  .on('disconnected', () => logger.warn('Database disconnected'))

export { connect, disconnect }
