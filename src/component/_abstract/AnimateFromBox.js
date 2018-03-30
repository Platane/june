import { h, Component } from 'preact'
import type { Box } from './positionTracker'

const createKeyFrames = scale => (a: Box, b: Box) =>
  scale
    ? // animate the scale
      [
        {
          transform: [
            `translate3d(${a.left - b.left}px,${a.top - b.top}px,0)`,
            `scale(${a.width / b.width}, ${a.height / b.height})`,
          ].join(' '),
        },
        {
          transform: 'translate3d(0,0,0) scale(1)',
        },
      ]
    : // animate the width / height
      [
        {
          width: `${a.width}px`,
          height: `${a.height}px`,
          transform: `translate3d(${a.left - b.left}px,${a.top - b.top}px,0)`,
        },
        {
          width: `${b.width}px`,
          height: `${b.height}px`,
          transform: 'translate3d(0,0,0)',
        },
      ]

export class AnimateFromBox extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.elementKey != nextProps.elementKey
  }

  afterRender = () => {
    if (!this.base || !this.props.origin) return

    const origin = this.props.origin
    const target = this.base.getBoundingClientRect()

    const ketFrames = createKeyFrames(this.props.scale)(origin, target)

    this.base.animate(ketFrames, {
      duration: this.props.duration,
      easing: this.props.easing,
    })
  }

  render({ children }) {
    if ('undefined' !== typeof requestAnimationFrame)
      requestAnimationFrame(this.afterRender)

    return (children && children[0]) || null
  }
}

AnimateFromBox.defaultProps = {
  duration: 500,
  easing: 'ease',
  scale: false,
  box: null,
}
