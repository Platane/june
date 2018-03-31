import { h, Component } from 'preact'
import { shows } from '~/__fixtures__'
import { createGetLastShows } from '~/service/tvmaze'

export default C =>
  class WithShows extends Component {
    state = { pending: null, shows: [] }

    getLastShows = createGetLastShows()

    loadMore = async () => {
      if (this.state.pending) return

      this.setState({ pending: true })

      const shows = await this.getLastShows()

      this.setState({ pending: null, shows: [...this.state.shows, ...shows] })
    }

    componentDidMount() {
      this.loadMore()
    }

    render() {
      return <C {...this.props} {...this.state} loadMore={this.loadMore} />
    }
  }
