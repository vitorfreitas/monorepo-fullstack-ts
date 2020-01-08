import * as Router from 'koa-router'
import { createBeer, findBeers } from './resolvers'

const router = new Router({
  prefix: '/api'
})

router.post('/beers', createBeer)
router.get('/beers', findBeers)

export default router
