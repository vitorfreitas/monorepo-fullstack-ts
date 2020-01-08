import * as Router from 'koa-router'
import { createBeer } from './resolvers'

const router = new Router({
  prefix: '/api'
})

router.post('/beer', createBeer)

export default router
