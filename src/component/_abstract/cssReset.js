import { injectGlobal, hydrate } from 'preact-emotion'
import { h, Component } from 'preact'
import { dark } from './palette'

export const injectReset = () => {
  if (typeof window !== 'undefined' && window.__emotion_ids)
    hydrate(window.__emotion_ids)

  injectGlobal`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html,
      body {
        color: ${dark};
        height: 100%;
        position: relative;
        margin: 0;
        font-family: Lato,Avenir Next,Helvetica Neue,sans-serif;
      }
    `
}

export const withCssReset = C =>
  class WithCssReset extends Component {
    componentDidMount() {
      injectReset()
    }

    render() {
      return <C {...this.props} />
    }
  }

export default withCssReset
