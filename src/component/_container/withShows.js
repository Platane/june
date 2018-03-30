import { h, Component } from 'preact'
import { shows } from '~/__fixtures__'

export default C =>
  class WithShows extends Component {
    state = { shows }

    render() {
      return <C {...this.props} {...this.state} />
    }
  }
