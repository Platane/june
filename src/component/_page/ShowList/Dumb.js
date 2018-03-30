import { h, Component } from 'preact'
import styled from 'preact-emotion'

export const ShowList = ({ shows, goTo }) => (
  <Container>
    {shows.map(show => (
      <div onClick={() => goTo(`show/${show.id}`)}>{show.name}</div>
    ))}
  </Container>
)

const Container = styled.div`
  z-index: 2;
`
