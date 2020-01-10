import { connect, disconnect } from '../../../test/database'
import { createBeer, updateBeer } from './resolvers'
import { generateBeer, removeBeers, beer } from '../../../test/helpers'

describe('Create Beer', () => {
  beforeAll(connect)
  afterAll(disconnect)

  test('should create a new beer', async done => {
    const beer = {
      picture:
        'https://images.tcdn.com.br/img/img_prod/584699/cerveja_heineken_long_neck_330ml_pack_com_6_unidaddes_1172_1_20180724192003.jpeg',
      name: 'Heineken',
      category: 'Puro Malte',
      abv: 4.2,
      ibu: 1.9
    }

    const ctx = {
      body: {
        message: ''
      },
      request: {
        body: beer
      }
    }

    await createBeer(ctx)

    expect(ctx.body.message).toBe('Beer successfully registered')
    done()
  })
})

describe('Update Beer', () => {
  beforeAll(connect)
  afterAll(disconnect)

  beforeEach(generateBeer)
  afterEach(removeBeers)

  test('should update a given beer data', async done => {
    const ctx = {
      params: {
        id: beer._id
      },
      request: {
        body: {
          name: 'Eisenbahn'
        }
      },
      body: {
        message: null
      }
    }

    await updateBeer(ctx)

    expect(ctx.body.message).toBe('Beer successfully updated')
    done()
  })
})
