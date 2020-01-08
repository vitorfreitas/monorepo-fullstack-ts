import React, { useState, useEffect } from 'react'
import ListContainer from 'containers/List'

const useBeers = () => {
  const [beers, setBeers] = useState([])

  const fetchBeersAndUpdate = async () => {
    const response = await fetch('http://localhost:3001/api/beers')
    const { beers } = await response.json()

    setBeers(beers)
  }

  useEffect(() => {
    fetchBeersAndUpdate()
  }, [])

  return beers
}

const List: React.FC = () => {
  const beers = useBeers()

  console.log(beers)

  return <ListContainer beers={beers} />
}

export default List
