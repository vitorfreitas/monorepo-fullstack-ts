import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import { IBeer } from '@entria/shared/interfaces/beer'

interface Props {
  beer: IBeer
}

const InformationsList = styled.ul`
  list-style: none;
`

const Information = styled.li`
  font-size: 2.25rem;
  text-align: center;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

const BeerImage = styled.img`
  width: 10rem;
  display: block;
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

      <BeerImage src={beer.picture} />

      <InformationsList>
        {keys.map((key: string) => (
          // @ts-ignore
          <Information key={key}>{`${labels[key]}: ${beer[key]}`}</Information>
        ))}
      </InformationsList>
    </article>
  )
}

export default DetailsContainer
