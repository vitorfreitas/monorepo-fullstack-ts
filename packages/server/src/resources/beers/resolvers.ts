import { IBeer } from '@entria/shared/interfaces/beer'
import Beer from './model'

export const createBeer = async ctx => {
  const beer: IBeer = ctx.request.body

  try {
    await Beer.create(beer)

    ctx.body = {
      message: 'Beer successfully registered'
    }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      error: err.message,
      message: 'Error creating a new beer. Try again later'
    }
  }
}

export const findBeers = async ctx => {
  try {
    const beers = await Beer.find()

    ctx.body = { beers }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      error: err.message,
      message: 'Error finding a new beer. Try again later'
    }
  }
}
