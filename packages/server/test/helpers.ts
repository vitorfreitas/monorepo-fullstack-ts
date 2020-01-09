import Beer from '../src/resources/beers/model'

export const beer = {
  _id: '5e165fbd370983153d59e570',
  picture:
    'https://images.tcdn.com.br/img/img_prod/584699/cerveja_heineken_long_neck_330ml_pack_com_6_unidaddes_1172_1_20180724192003.jpeg',
  name: 'Heineken',
  category: 'Puro Malte',
  abv: 4.2,
  ibu: 1.9
}

export const generateBeer = async () => {
  await Beer.create(beer)
}

export const removeBeers = async () => {
  await Beer.deleteMany({})
}
