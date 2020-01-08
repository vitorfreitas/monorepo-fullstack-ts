import app from './app'
import logger from './logger'
import { connect } from './database'
import { PORT } from './config'

;(async () => {
  await connect()

  app.listen(PORT, () => {
    logger.info('Server is running...')
  })
})()
