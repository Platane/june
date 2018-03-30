import { h, Component } from 'preact'
import styled from 'preact-emotion'
import { Image } from '~/component/Image'
import { grey } from '~/component/_abstract/palette'

export const Starring = ({ show }) => (
  <Container>
    <Header>Starring</Header>
    <List>
      {(show.cast || []).map(({ actor, character }) => (
        <Section key={actor.id}>
          <Portrait
            src={actor.image && (actor.image.medium || actor.image.original)}
          />
          <Row>
            <ActorName>{actor.name}</ActorName>
            <CharacterName>{character.name}</CharacterName>
          </Row>
        </Section>
      ))}
    </List>
  </Container>
)

const Header = styled.h2``

const Section = styled.div`
  border-bottom: solid 1px ${grey};
  height: 64px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 600px) {
    border-bottom: solid 1px transparent;
  }
`
const Row = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

const List = styled.div`
  margin-top: 32px;
`

const Portrait = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 16px;
`

const ActorName = styled.span`
  font-weight: bold;
  min-width: 160px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CharacterName = styled.span`
  color: ${grey};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Container = styled.div`
  overflow: hidden;
`
