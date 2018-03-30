import { h, Component } from 'preact'
import styled from 'preact-emotion'
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
  writePosition(`show.${show.id}`, event.target.getBoundingClientRect())

  // change router
  goTo(`/show/${show.id}`)
}

//elementKey={show.id}
export const Card = (props: Props) => (
  <Container {...props} onClick={createClickHandler(props)}>
    <FixedRatio ratio={4 / 5}>
      <Image src={props.show.image && props.show.image.original} />
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
const Container = styled.div`
  position: relative;
  background-color: ${white};
  border-radius: ${borderRadius}px;
  box-shadow: ${shadow};
  display: flex;
  flex-direction: column;
`
