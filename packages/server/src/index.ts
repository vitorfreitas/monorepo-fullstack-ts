import app from './app'
import logger from './logger'

app.listen(3000, () => {
  logger.info('Server is running...')
})
