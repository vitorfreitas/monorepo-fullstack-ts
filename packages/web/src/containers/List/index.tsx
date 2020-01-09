import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { IBeer } from '@entria/shared/interfaces/beer'
import Header from 'components/Header'

const BeersGrid = styled.ul`
  margin-top: 4rem;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);
`

const Beer = styled.li`
  cursor: pointer;
`

const BeerImage = styled.img`
  width: 15rem;
`

interface Props {
  beers: IBeer[]
}

const ListContainer: React.FC<Props> = ({ beers }) => {
  const history = useHistory()

  const navigateToBeerDetails = (beer: IBeer) => {
    history.push('/details', { beer })
  }

  return (
    <article>
      <Header title="Lista de cervejas" />

      <section>
        <BeersGrid>
          {beers.map(beer => (
            <Beer key={beer._id} onClick={() => navigateToBeerDetails(beer)}>
              <BeerImage src={beer.picture} alt="Beer" />
            </Beer>
          ))}
        </BeersGrid>
      </section>
    </article>
  )
}

export default ListContainer
