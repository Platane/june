import { h, Component } from 'preact'
import styled from 'preact-emotion'
import { vibrant } from '~/component/_abstract/palette'

export const Header = ({ goTo }) => (
  <Container>
    <Content onClick={() => goTo('/show')}>TV Bland</Content>
  </Container>
)

const Content = styled.div`
  width: calc(100% - 16px);
  max-width: 980px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
