import { h, Component } from 'preact'
import { createGetLastShows, getShowWithCastById } from '~/service/tvmaze'
import EventEmitter from 'events'

export class Provider extends Component {
  _getLastShows = createGetLastShows()

  eventEmitter = new EventEmitter()

  _cache = {
    show_byId: {},
    lastShows: [],
    pending: {},
  }

  subscribe = fn => this.eventEmitter.addListener('update', fn)

  unsubscribe = fn => this.eventEmitter.removeListener('update', fn)

  loadMoreLastShows = async () => {
    if (this._cache.pending['lastShows']) return

    this._cache.pending['lastShows'] = true

    this.eventEmitter.emit('update')

    const shows = await this._getLastShows()

    this._cache.lastShows.push(...shows.map(x => x.id))

    shows.forEach(s => (this._cache.show_byId[s.id] = s))

    this._cache.pending['lastShows'] = false

    this.eventEmitter.emit('update')
  }

  loadShow = async showId => {
    if (this._cache.pending[`show.${showId}`]) return

    if (this._cache.show_byId[showId] && this._cache.show_byId[showId].cast)
      return

    this._cache.pending[`show.${showId}`] = true

    this.eventEmitter.emit('update')

    const show = await getShowWithCastById(showId)

    this._cache.pending[`show.${showId}`] = false

    this._cache.show_byId[showId] = show

    this.eventEmitter.emit('update')
  }

  getShow = showId => this._cache.show_byId[showId]

  getLastShows = () =>
    this._cache.lastShows.map(showId => this._cache.show_byId[showId])

  getShowPending = showId => this._cache.pending[`show.${showId}`]

  getLastShowsPending = () => this._cache.pending['lastShows']

  getChildContext() {
    return {
      store: {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        loadShow: this.loadShow,
        loadMoreLastShows: this.loadMoreLastShows,
        getShow: this.getShow,
        getLastShows: this.getLastShows,
        getShowPending: this.getShowPending,
        getLastShowsPending: this.getLastShowsPending,
      },
    }
  }

  render({ children }) {
    return (children && children[0]) || null
  }
}
