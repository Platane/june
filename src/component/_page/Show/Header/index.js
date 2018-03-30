import { h, Component } from 'preact'
import styled from 'preact-emotion'
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

const Summary_ = styled.div``

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
  z-index: 1000;
  position: relative;
`

const Content = styled.div`
  margin-top: 32px;
`

const StarCountW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
