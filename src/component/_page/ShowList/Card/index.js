import { h, Component } from 'preact'
import styled, { keyframes, css } from 'preact-emotion'
import { Image as Image_ } from '~/component/Image'
import {
  dark,
  shadow,
  white,
  borderRadius,
} from '~/component/_abstract/palette'
import { FixedRatio } from '~/component/FixedRatio'
import { StarCount as StarCount_ } from '~/component/StarCount'
import type { Show } from 'type'

export type Props = {
  show: Show,
}

const createClickHandler = ({ show, goTo, writePosition }) => event => {
  // write position to have a nice transition
  const domImage = event.currentTarget.querySelector('.image')
  writePosition(`show.${show.id}`, domImage.getBoundingClientRect())

  // change router
  goTo(`/show/${show.id}`)
}

//elementKey={show.id}
export const Card = (props: Props) => (
  <Container {...props} onClick={createClickHandler(props)}>
    <FixedRatio ratio={4 / 5}>
      <Image
        className="image"
        src={props.show.image && props.show.image.original}
      />
    </FixedRatio>
    <Content>
      <StarCount count={props.show.rating} />
      <Name>{props.show.name}</Name>
    </Content>
  </Container>
)

const Image = styled(Image_)`
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
`

const StarCount = styled(StarCount_)`
  opacity: ${props => (props.count === null ? 0 : 1)};
  width: 100px;
  height: 20px;
`

const Content = styled.div`
  padding: 16px 8px;
  height: ${16 + 20 + 16 + 40 + 16}px;
  display: flex;
  flex-direction: column;
`

const Name = styled.h4`
  line-height: 20px;
  max-height: 40px;
  margin-top: 16px;
  overflow: hidden;
  display: block;
`

const appear = keyframes`
  0% { opacity: 0; transform: scale(0.6,0.6) translateY(300px)}
  80% { opacity: 1; transform: scale(1.04,1.04) translateY(0px)}
  100% { opacity: 1; transform: scale(1,1)}
`
const disappear = keyframes`
  0% { transform: scale(1,1)}
  100% { transform: scale(0.3,0.3) translateY(400px)}
`

const Container = styled.div`
  transform-origin: center;
  animation: ${appear} 320ms linear;
  position: relative;
  background-color: ${white};
  border-radius: ${borderRadius}px;
  box-shadow: ${shadow};
  display: flex;
  flex-direction: column;

  ${props => {
    if (
      props.fadeOff &&
      props.nextRouter &&
      props.nextRouter.param.showId == props.show.id
    )
      return css`
        opacity: 0;
        animation: none;
      `

    if (props.fadeOff)
      return css`
        animation: ${disappear} 320ms linear;
      `
  }};
`
