import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
  cursor: pointer;
  transition: 0.2s all;

  :hover {
    transform: scale(1.1);
  }
`

const Picture = styled.img`
  width: 15rem;
`

interface Props {
  pictureUrl: string
  onClick?: () => void
}

const PictureListItem: React.FC<Props> = ({ pictureUrl, onClick }) => (
  <Container onClick={onClick}>
    <Picture src={pictureUrl} />
  </Container>
)

export default PictureListItem
