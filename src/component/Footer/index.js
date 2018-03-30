import styled from 'preact-emotion'
import { h, Component } from 'preact'
import { white, vibrant } from '~/component/_abstract/palette'

export const Footer = () => <Container />

const Container = styled.div`
  background-color: ${vibrant[2]};
  color: ${white};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
`
