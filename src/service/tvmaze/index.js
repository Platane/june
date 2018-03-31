import { parseShow, parseCast } from './parse'
import type { Show, CastItem } from 'type'

const endpoint = 'https://api.tvmaze.com'

export const getShowsByName = (pattern: string): Promise<Show[]> =>
  fetch(`${endpoint}/search/shows?q=${pattern}`)
    .then(res => res.json())
    .then(res => res.map(x => parseShow(x.show)))

export const getShowById = (showId: string): Promise<Show | null> =>
  fetch(`${endpoint}/shows/${showId}`)
    .then(res => res.json())
    .then(res => res && parseShow(res))

export const getCastForShow = (showId: string): Promise<CastItem[]> =>
  fetch(`${endpoint}/shows/${showId}/cast`)
    .then(res => res.json())
    .then(res => res.map(parseCast))

export const getShowWithCastById = (showId: string): Promise<Show | null> => {
  let show, cast

  return Promise.all([
    getShowById(showId).then(x => (show = x)),
    getCastForShow(showId).then(x => (cast = x)),
  ]).then(() => cast && show && { ...show, cast })
}

export const createGetLastShows = () => {
  const alreadyRead = {}

  let cursor = new Date().toISOString().slice(0, 10)

  const getShowAtDate = (date: string): Promise<Show[]> =>
    fetch(`${endpoint}/schedule?country=US&date=${date}`)
      .then(res => res.json())
      .then(res => res.map(x => parseShow(x.show)))

  const getNextCursor = date => {
    const a = new Date(date)
    a.setDate(a.getDate() - 1)

    return a.toISOString().slice(0, 10)
  }

  return async (): Promise<Show[]> => {
    const newOnes = []

    let k = 5

    while (newOnes.length < 10 && k-- > 0) {
      const shows = await getShowAtDate(cursor)

      cursor = getNextCursor(cursor)

      shows.forEach(s => {
        if (alreadyRead[s.id]) return

        alreadyRead[s.id] = true

        newOnes.push(s)
      })
    }

    return newOnes
  }
}
