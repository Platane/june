import { h, Component } from 'preact'
import styled from 'preact-emotion'
import { Card as Card_ } from './Card'
import { borderRadius, vibrant } from '~/component/_abstract/palette'
import type { Show } from 'type'

export type Props = {
  shows: Show[],
  pending: boolean,

  goTo: () => void,
  loadMore: () => void,
}

export const ShowList = ({ shows, pending, loadMore, ...props }: Props) => (
  <Container>
    <Header>
      <p>TV Show and web series database.</p>
      <p>
        Create personalised schedules. Episode guide, cast, crew and character
        information.
      </p>
    </Header>
    <Label>Last Added Shows</Label>
    <List>
      {shows.map(show => <Card key={show.id} show={show} {...props} />)}
    </List>
    {!pending && <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>}
    {pending && <PendingLabel>loading ...</PendingLabel>}
  </Container>
)

const LoadMoreButton = styled.div`
  padding: 16px;
  margin: 32px 0;
  text-align: center;
  background-color: ${vibrant[3]};
  border-radius: ${borderRadius};
  cursor: pointer;
  &:active {
    transform: scale(0.98, 0.98);
  }
`
const PendingLabel = styled.div`
  padding: 16px;
  margin: 32px 0;
  text-align: center;
`

const Header = styled.div`
  margin: 32px 8px 64px 8px;
`

const Label = styled.h2`
  margin: 32px 8px;
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

  transition: width 280ms ease, height 280ms ease;
`

const Container = styled.div``
