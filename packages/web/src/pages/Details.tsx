import React from 'react'
import DetailsContainer from 'containers/Details'
import { useLocation } from 'react-router-dom'

const Details: React.FC = () => {
  const location = useLocation()

  return <DetailsContainer beer={location.state.beer} />
}

export default Details
