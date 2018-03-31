import { h } from 'preact'
import styled, { css, keyframes } from 'preact-emotion'
import { Transition } from 'react-propstransition'
import { grey, vibrant, shadowColor } from '~/component/_abstract/palette'

const getColor = key => {
  switch (key) {
    case 'show':
      return vibrant[1]

    default:
    case 'showList':
      return vibrant[2]
  }
}

export const WallPaper = ({ router }) => (
  <Transition toTransition={router.key} duration={400}>
    {({ next, previous, transition }) => (
      <Container>
        {transition && (
          <Cut
            key={previous}
            style={{
              animationName: disappear,
              backgroundColor: getColor(previous),
            }}
          />
        )}
        <Cut
          key={next}
          style={{
            animationName: transition && appear,
            backgroundColor: getColor(next),
          }}
        />
      </Container>
    )}
  </Transition>
)

const appear = keyframes`
  0%{ transform: translateY(-136px) rotate(3deg) };
  30%{ transform: translateY(-50px) rotate(-2deg) };
  60%{ transform: translateY(-12px) rotate(1.4deg) };
  80%{ transform: translateY(6px) rotate(-1deg) };
  100%{ transform: translateY(0px) };
`
const disappear = keyframes`
  0%{ transform: translateY(0px) };
  20%{ transform: translateY(6px) rotate(-1deg) };
  40%{ transform: translateY(-12px) rotate(1.4deg) };
  70%{ transform: translateY(-50px) rotate(-2deg) };
  100%{ transform: translateY(-136px) rotate(3deg) };
`

const Cut = styled.div`
  overflow: hidden;
  position: absolute;
  top: -100px;
  left: -500px;
  right: -500px;
  height: 200px;

  opacity: 0.85;
  transform-origin: 50% 50%;

  animation-duration: 620ms;
  animation-timing-function: linear;
`

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 300px;
  transform-origin: 0 0;
  transform: scale(1, 4);
`
