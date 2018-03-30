import { h, Component } from 'preact'
import styled from 'preact-emotion'

import { Header } from '~/component/Header'
import { Footer } from '~/component/Footer'
import { Show } from '~/component/_page/Show'
import { ShowList } from '~/component/_page/ShowList'

import { ligthGrey } from '~/component/_abstract/palette'

export const Content = ({ router, ...props }) => {
  switch (router.key) {
    case 'showList':
      return <ShowList {...props} />

    case 'show':
      return <Show showId={router.param.showId} {...props} />

    default:
      return null
  }
}

export const App = props => (
  <Container>
    <Header {...props} />
    <ContentWrap>
      <Content {...props} />
    </ContentWrap>
    <Footer />
  </Container>
)

const ContentWrap = styled.div`
  flex: 0px 1 1;
  position: relative;
  max-width: 980px;
  width: calc(100% - 16px);
  margin: 0 auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: ${ligthGrey};
`
