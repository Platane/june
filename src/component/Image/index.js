import { h } from 'preact'
import styled from 'preact-emotion'
import { grey } from '~/component/_abstract/palette'

export const Image = ({ src, ...props }) => (
  <ImageEl
    {...props}
    style={{ ...(props.style || {}), backgroundImage: `url(${src})` }}
  />
)

const ImageEl = styled.div`
  background-color: ${grey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
