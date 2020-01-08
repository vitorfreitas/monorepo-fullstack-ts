import * as Router from 'koa-router'
import { createBeer, findBeers, updateBeer, removeBeer } from './resolvers'

const router = new Router({
  prefix: '/api'
})

router.post('/beers', createBeer)
router.get('/beers', findBeers)
router.put('/beers/:id', updateBeer)
router.delete('/beers/:id', removeBeer)

export default router
