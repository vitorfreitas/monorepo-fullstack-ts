import * as Router from 'koa-router'
import { createBeer, findBeers, updateBeer } from './resolvers'

const router = new Router({
  prefix: '/api'
})

router.post('/beers', createBeer)
router.get('/beers', findBeers)
router.put('/beers/:id', updateBeer)

export default router
