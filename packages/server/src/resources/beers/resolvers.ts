import { IBeer } from '@entria/shared/interfaces/beer'
import Beer from './model'

export const createBeer = async ctx => {
  const beer: IBeer = ctx.request.body

  await Beer.create(beer)

  ctx.body = {
    message: 'Beer successfully registered'
  }
}

export const findBeers = async ctx => {
  const beers = await Beer.find()

  ctx.body = { beers }
}

export const updateBeer = async ctx => {
  await Beer.findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.body = {
    message: 'Beer successfully updated'
  }
}

export const removeBeer = async ctx => {
  await Beer.findByIdAndRemove(ctx.params.id)

  ctx.body = {
    message: 'Beer successfully removed'
  }
}
