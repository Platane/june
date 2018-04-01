import { h, Component } from 'preact'

export default C =>
  class WithLastShows extends Component {
    state = { pending: false, show: null }

    update = () =>
      this.setState({
        pending: this.context.store.getShowPending(this.props.showId),
        show: this.context.store.getShow(this.props.showId),
      })

    componentDidMount() {
      this.context.store.subscribe(this.update)
      this.context.store.loadShow(this.props.showId)
      this.update()
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.update)
    }

    render() {
      return <C {...this.props} {...this.state} />
    }
  }
