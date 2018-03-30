import { parseShow, parseCast } from './parse'

const endpoint = 'https://api.tvmaze.com'

export const getShowsByName = async (pattern: string) =>
  fetch(`${endpoint}/search/shows?q=${pattern}`)
    .then(res => res.json())
    .then(res => res.map(x => parseShow(x.show)))

export const getCastForShow = async (showId: string) =>
  fetch(`${endpoint}/shows/${showId}/cast`)
    .then(res => res.json())
    .then(res => res.map(parseCast))
