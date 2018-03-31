import { h } from 'preact'
import styled, { keyframes } from 'preact-emotion'
import { Info } from './Info'
import { Starring } from './Starring'
import { Header } from './Header'

export const Show = ({ show }) =>
  show && (
    <Container>
      <Header show={show} />
      <Row>
        <Info show={show} />
        <Starring show={show} />
      </Row>
    </Container>
  )

const Container = styled.div`
  padding: 8px;
`

const appear = keyframes`
  0%{ opacity: 0; transform: translateY(120px)};
  85%{ opacity: 0; transform: translateY(120px)};
  100%{ opacity: 1; transform: translateY(0px)};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 64px;

  animation: ${appear} 680ms linear;

  & > * {
    flex: calc(50% - 16px) 0 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    & > *:nth-child(2) {
      margin-top: 64px;
    }
  }
`
