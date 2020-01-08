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
      message: 'Error finding beers. Try again later'
    }
  }
}

export const updateBeer = async ctx => {
  try {
    await Beer.findByIdAndUpdate(ctx.params.id, ctx.request.body)

    ctx.body = {
      message: 'Beer successfully updated'
    }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      error: err.message,
      message: 'Error updating this beer. Try again later'
    }
  }
}

export const removeBeer = async ctx => {
  try {
    await Beer.findByIdAndRemove(ctx.params.id)

    ctx.body = {
      message: 'Beer successfully removed'
    }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      error: err.message,
      message: 'Error removing this beer. Try again later'
    }
  }
}
