import React from 'react'
import { storiesOf } from '@storybook/react'
import InfoTable from '..'

const fields = ['name', 'category', 'abv', 'ibu']
const labels = {
  name: 'Nome',
  category: 'Categoria',
  abv: 'ABV',
  ibu: 'IBU'
}
const dataSource = [
  {
    name: 'Heineken',
    category: 'Puro Malte',
    abv: 1.3,
    ibu: 3.2
  }
]

storiesOf('InfoTable', module).add('Default', () => (
  <InfoTable fields={fields} labels={labels} dataSource={dataSource} />
))
