import { h, Component } from 'preact'
import { shows } from '~/__fixtures__'

export default C =>
  class WithShow extends Component {
    render() {
      return (
        <C {...this.props} show={shows.find(x => x.id === this.props.showId)} />
      )
    }
  }
