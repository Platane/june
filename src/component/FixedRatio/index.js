import { h } from 'preact'
import styled from 'preact-emotion'

export type Props = {
  ratio: number,
}

export const FixedRatio = ({ ratio, children, ...props }: Props) => (
  <Body {...props}>
    <Ratio ratio={ratio} />
    <Container>{children}</Container>
  </Body>
)

FixedRatio.defaultProps = {
  ratio: 1,
}

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Ratio = styled.div`
  padding-top: ${props => 1 / props.ratio * 100}%;
`

const Body = styled.div`
  position: relative;
  width: 100%;
`
