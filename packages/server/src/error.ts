import logger from './logger'

const error = async (ctx, next) => {
  return next().catch(err => {
    logger.error(`${err.name} - ${err.message}`)

    const errorStatus = {
      Error: 422,
      AuthenticationError: 401,
      ValidationError: 401
    }

    if (!err.name) {
      ctx.status = 500
      ctx.body = { message: 'Something went wrong!' }
      return
    }

    ctx.status = errorStatus[err.name]
    ctx.body = { message: err.message }
  })
}

export default error
