import { h, Component } from 'preact'
import styled from 'preact-emotion'
import { Card as Card_ } from './Card'
import type { Show } from 'type'

export type Props = {
  shows: Show[],
  goTo: () => void,
}

export const ShowList = ({ shows, ...props }: Props) => (
  <Container>
    <Header>
      <p>TV Show and web series database.</p>
      <p>
        Create personalised schedules. Episode guide, cast, crew and character
        information.
      </p>
    </Header>
    <List>
      {shows.map(show => <Card key={show.id} show={show} {...props} />)}
    </List>
  </Container>
)

const Header = styled.div`
  margin: 8px;
`

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Card = styled(Card_)`
  position: relative;

  cursor: pointer;

  &:active {
    transform: scale(0.98, 0.98);
  }

  margin: 8px;

  width: calc(${100 / 5}% - 16px);

  @media (max-width: 900px) {
    width: calc(${100 / 4}% - 16px);
  }
  @media (max-width: 760px) {
    width: calc(${100 / 3}% - 16px);
  }
  @media (max-width: 600px) {
    width: calc(${100 / 2}% - 16px);
  }
`

const Container = styled.div``
