import * as Koa from 'koa'
import * as bodyParser from 'koa-body'
import * as cors from '@koa/cors'
import error from './error'
import rootRoutes from './routes'
import beerRoutes from './resources/beers/routes'

// Middlewares
const app = new Koa()
app.use(bodyParser())
app.use(cors())
app.use(error)

// Routes
const routes = [rootRoutes, beerRoutes]
routes.forEach(route => {
  app.use(route.routes())
  app.use(route.allowedMethods())
})

export default app
