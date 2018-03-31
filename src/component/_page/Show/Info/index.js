import { h, Component } from 'preact'
import styled from 'preact-emotion'
import { grey } from '~/component/_abstract/palette'

export const Info = ({ show }) => (
  <Container>
    <Header>Show Info</Header>
    <List>
      {[
        { label: 'Streamed on', value: show.network || '-' },
        {
          label: 'Schedule',
          value: show.status.scheduledDays
            ? show.status.scheduledDays.join(',')
            : '-',
        },
        { label: 'Status', value: show.status.type },
        { label: 'Genre', value: show.genres.join(', ') },
      ].map(({ label, value }) => (
        <Section key={label}>
          <Label>{label}</Label>
          <Value>{value}</Value>
        </Section>
      ))}
    </List>
  </Container>
)

const Header = styled.h2``

const Section = styled.div`
  border-bottom: solid 1px ${grey};
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: solid 1px transparent;
  }
`

const List = styled.div`
  margin-top: 32px;
`

const Label = styled.span`
  font-weight: bold;
  min-width: 160px;
  display: inline-block;
`

const Value = styled.span`
  color: ${grey};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Container = styled.div`
  overflow: hidden;
`
