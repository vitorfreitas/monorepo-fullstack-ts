import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { IBeer } from '@entria/shared/interfaces/beer'
import Header from 'components/Header'
import PictureListItem from 'components/PictureListItem'

const BeersGrid = styled.ul`
  margin-top: 4rem;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);
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
            <PictureListItem
              key={beer._id}
              pictureUrl={beer.picture}
              onClick={() => navigateToBeerDetails(beer)}
            />
          ))}
        </BeersGrid>
      </section>
    </article>
  )
}

export default ListContainer
