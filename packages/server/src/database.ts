import * as mongoose from 'mongoose'

import * as config from './config'
import logger from './logger'

const connect = async () => {
  await mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
}

const disconnect = async () => {
  await mongoose.disconnect()
}

mongoose.connection
  .on('open', () => logger.info('Connection opened'))
  .on('error', error => logger.error(error))
  .on('close', () => logger.warn('Connection closed'))
  .on('connected', () => logger.info('Database connected'))
  .on('disconnected', () => logger.warn('Database disconnected'))

export { connect, disconnect }
