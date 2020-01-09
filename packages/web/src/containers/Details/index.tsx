import React from 'react'
import styled from 'styled-components'
import { IBeer } from '@entria/shared/interfaces/beer'
import Header from 'components/Header'
import InfoTable from 'components/InfoTable'

interface Props {
  beer: IBeer
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BeerImage = styled.img`
  width: 10rem;
  margin: 2rem auto;
`

const DetailsContainer: React.FC<Props> = ({ beer }) => {
  const keys = ['name', 'category', 'abv', 'ibu']
  const labels = {
    name: 'Nome',
    category: 'Categoria',
    abv: 'ABV',
    ibu: 'IBU'
  }

  return (
    <article>
      <Header title={beer.name} />

      <Content>
        <BeerImage src={beer.picture} />

        <InfoTable fields={keys} labels={labels} dataSource={[beer]} />
      </Content>
    </article>
  )
}

export default DetailsContainer
