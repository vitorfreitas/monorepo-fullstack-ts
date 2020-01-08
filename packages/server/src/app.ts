import * as Koa from 'koa'
import * as bodyParser from 'koa-body'
import * as cors from '@koa/cors'
import beerRoutes from './resources/beers/routes'

// Middlewares
const app = new Koa()
app.use(bodyParser())
app.use(cors())

// Routes
const routes = [beerRoutes]
routes.forEach(route => {
  app.use(route.routes())
  app.use(route.allowedMethods())
})

export default app
