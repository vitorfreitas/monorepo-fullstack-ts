import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
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

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  )
}

export default Header
