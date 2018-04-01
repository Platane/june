import { h, Component } from 'preact'
import styled, { css, keyframes } from 'preact-emotion'

import { Header } from '~/component/Header'
import { Footer } from '~/component/Footer'
import { Show } from '~/component/_page/Show'
import { ShowList } from '~/component/_page/ShowList'
import { WallPaper } from '~/component/Wallpaper'
import { Transition } from 'react-propstransition'

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
    <WallPaper {...props} />
    <Header {...props} />
    <Transition
      toTransition={{ ...props.router }}
      delay={500000}
      equal={(a, b) => a.path == b.path}
    >
      {({ next, previous }) => (
        <ContentWrap>
          {previous && (
            <FadingContent key={previous.path} off>
              <Content {...props} router={previous} nextRouter={next} fadeOff />
            </FadingContent>
          )}
          <FadingContent key={next.path}>
            <Content {...props} router={next} />
          </FadingContent>
        </ContentWrap>
      )}
    </Transition>
    <Footer />
  </Container>
)

const fadeOff = keyframes`
  0%{ opacity:1;}
  100%{ opacity:0;}
`

const FadingContent = styled.div`
  position: relative;
  z-index: 2;

  ${props =>
    props.off
      ? css`
          position: absolute;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          animation: ${fadeOff} 300ms ease;
        `
      : ''};
  top: 0;
  left: 0;
  right: 0;
`

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
