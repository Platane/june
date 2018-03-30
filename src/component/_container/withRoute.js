import { h, Component } from 'preact'
import { routeValidator } from '~/service/router/routeValidator'
import { getLocation, pushState } from '~/service/navigator'

const routes = [
  { path: '/', key: 'showList' },
  { path: '/show', key: 'showList' },
  { path: '/show/:showId', key: 'show' },
]

const getRoute = routeValidator(routes)

export default C =>
  class WithRoute extends Component {
    state = getRoute(getLocation().pathname)

    goTo = path =>
      this.setState(getRoute(path), () => pushState(this.state.path))

    componentDidMount() {
      window.addEventListener('popstate', () =>
        this.setState(getRoute(getLocation().pathname))
      )
    }

    render() {
      return <C {...this.props} router={this.state} goTo={this.goTo} />
    }
  }
