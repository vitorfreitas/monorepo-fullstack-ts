import * as Koa from 'koa'
import * as bodyParser from 'koa-body'
import * as cors from '@koa/cors'

const app = new Koa()
app.use(bodyParser())
app.use(cors())

export default app
