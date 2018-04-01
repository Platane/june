import { h, Component } from 'preact'

export default C =>
  class WithLastShows extends Component {
    state = { pending: false, shows: [] }

    update = () =>
      this.setState({
        pending: this.context.store.getLastShowsPending(),
        shows: this.context.store.getLastShows(),
      })

    componentDidMount() {
      this.context.store.subscribe(this.update)
      this.update()

      if (this.context.store.getLastShows().length == 0)
        this.context.store.loadMoreLastShows()
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.update)
    }

    render() {
      return (
        <C
          {...this.props}
          {...this.state}
          loadMore={this.context.store.loadMoreLastShows}
        />
      )
    }
  }
