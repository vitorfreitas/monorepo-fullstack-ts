import React from 'react'
import styled from 'styled-components'
import { IBeer } from '@entria/shared/interfaces/beer'
import { useHistory } from 'react-router-dom'

const Header = styled.header`
  width: 100vw;
  padding: 4.5rem 0;
  display: flex;
  align-items: center;
  background: #f39c12;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;
`

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
      <Header>
        <HeaderTitle>Lista de cervejas</HeaderTitle>
      </Header>

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
