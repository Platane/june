import { h, Component } from 'preact'
import styled from 'preact-emotion'

export const Show = ({ show }) => <Container>{show && show.name}</Container>

const Container = styled.div`
  z-index: 2;
`
