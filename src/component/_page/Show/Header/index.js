import { h } from 'preact'
import styled, { keyframes } from 'preact-emotion'
import { Image as Image_ } from '~/component/Image'
import { FixedRatio } from '~/component/FixedRatio'
import { StarCount as StarCount_ } from '~/component/StarCount'
import { AnimateFromBox } from '~/component/_abstract/AnimateFromBox'
import { withPositionTracker } from '~/component/_abstract/positionTracker'

import {
  dark,
  shadow,
  white,
  borderRadius,
} from '~/component/_abstract/palette'

const Header_ = ({ show, getPosition }) => (
  <Container>
    <ImageW ratio={4 / 5}>
      <AnimateFromBox
        origin={getPosition(`show.${show.id}`)}
        duration={300}
        scale
      >
        <Image src={show.image && show.image.original} />
      </AnimateFromBox>
    </ImageW>

    <Content>
      <StarCountW>
        <StarCount count={show.rating} />
        <StarCountLabel count={show.rating}>
          {Math.round(show.rating * 10) / 2}
        </StarCountLabel>
      </StarCountW>
      <Name>{show.name}</Name>
      <Summary>{show.summary || ''}</Summary>
    </Content>
  </Container>
)

export const Header = withPositionTracker(Header_)

const Summary = ({ children }) => (
  <Summary_>
    {children[0].split('\n').map((x, i) => <p key={i}>{x}</p>)}
  </Summary_>
)

const RatingAnimation = keyframes`
  0%{ opacity: 0; transform:translateX(300px);};
  20%{ opacity: 0; transform:translateX(300px);};
  60%{ opacity: 1; transform:translateX(0px);};
  100%{ opacity: 1; transform:translateX(0px);};
`
const NameAnimation = keyframes`
  0%{ opacity: 0; transform:translateX(300px);};
  40%{ opacity: 0; transform:translateX(300px);};
  80%{ opacity: 1; transform:translateX(0px);};
  100%{ opacity: 1; transform:translateX(0px);};
`
const SummaryAnimation = keyframes`
  0%{ opacity: 0; transform:translateX(300px);};
  60%{ opacity: 0; transform:translateX(300px);};
  100%{ opacity: 1; transform:translateX(0px);};
`

const Summary_ = styled.div`
  animation: ${SummaryAnimation} 480ms ease;
`

const ImageW = styled(FixedRatio)`
  width: 280px;
  flex-shrink: 0;
  align-self: flex-start;

  margin-right: 16px;

  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
  }
`
const Image = styled(Image_)`
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius}px;
  transform-origin: center center;
  z-index: 1000;
  position: relative;
`

const Content = styled.div`
  margin-top: 32px;
  overflow: hidden;
`

const StarCountW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  animation: ${RatingAnimation} 480ms ease;
`

const StarCountLabel = styled.span`
  opacity: ${props => (props.count === null ? 0 : 1)};
  margin-left: 8px;
`

const StarCount = styled(StarCount_)`
  opacity: ${props => (props.count === null ? 0 : 1)};
  width: 100px;
  height: 20px;
`

const Name = styled.h1`
  line-height: 40px;
  max-height: 80px;
  margin: 16px 0;
  overflow: hidden;
  display: block;

  animation: ${NameAnimation} 480ms ease;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
