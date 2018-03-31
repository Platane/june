import { h, Component } from 'preact'
import { shows } from '~/__fixtures__'
import { getShowWithCastById } from '~/service/tvmaze'

export default C =>
  class WithShow extends Component {
    state = { pending: null, show: null }

    update = async () => {
      if (
        this.show &&
        this.show.id == this.props.showId &&
        this.props.showId == this.state.pending
      )
        return

      this.setState({ pending: this.props.showId })

      const show = await getShowWithCastById(this.props.showId)

      if (this.props.showId != this.state.pending) return

      this.setState({ pending: null, show })
    }

    componentDidMount() {
      this.update()
    }

    render() {
      return <C {...this.props} {...this.state} />
    }
  }
