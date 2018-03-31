import { h, Component } from 'preact'
import styled from 'preact-emotion'
import { vibrant } from '~/component/_abstract/palette'

export const Header = ({ goTo }) => (
  <Container>
    <Content>
      <Title onClick={() => goTo('/show')}>TV Bland</Title>
    </Content>
  </Container>
)

const Title = styled.h2`
  cursor: pointer;
`
const Content = styled.div`
  width: calc(100% - 16px);
  max-width: 980px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  margin-left: auto;
  margin-right: auto;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  z-index: 1;
  position: relative;
`
