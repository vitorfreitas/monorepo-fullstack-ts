import React from 'react'
import { storiesOf } from '@storybook/react'
import PictureListItem from '..'

const pictureUrl =
  'https://superprix.vteximg.com.br/arquivos/ids/177616-600-600/Cerveja-Heineken-Long-Neck-330-ml-c-6-unidades.jpg?v=636663765568570000'

storiesOf('PictureListItem', module).add('Default', () => (
  <PictureListItem pictureUrl={pictureUrl} />
))
