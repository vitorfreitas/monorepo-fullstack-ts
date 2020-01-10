import * as KoaRouter from 'koa-router'
import * as mongoose from 'mongoose'

const router = new KoaRouter()

router.get('/', async ctx => {
  ctx.body = { message: 'Welcome to the API' }
})

router.get('/healthz', async ctx => {
  try {
    await mongoose.connection.db.admin().ping()

    ctx.status = 200
    ctx.body = { status: 'healthy' }
  } catch (err) {
    ctx.status = 500
    ctx.body = { status: 'unhealthy', error: err.message }
  }
})

export default router
