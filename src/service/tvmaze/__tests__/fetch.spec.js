import test from 'tape'
import {
  getShowsByName,
  getShowById,
  getShowWithCastById,
  getCastForShow,
  createGetLastShows,
} from '../index'
import type { Show, CastItem } from 'type'

const flatten = arr => [].concat(...arr)

test('getShowsByName', async t => {
  // xxx arthur load a lot of show to have a better chance to catch special formated ones
  // const shows = await getShowsByName('girl')

  const shows = flatten(
    await Promise.all(['girl', 'a', 'the', 'with', 'el'].map(getShowsByName))
  )

  t.pass('request should not fail')

  t.assert(shows.length, 'result should not be empty')

  t.assert(shows.every(s => Show.assert(s)), 'should return shows object')

  t.end()
})

test('getCastForShow', async t => {
  const cast = await getCastForShow('139')

  t.pass('request should not fail')

  t.assert(cast.length, 'result should not be empty')

  t.assert(cast.every(s => CastItem.assert(s)), 'should return cast object')

  t.end()
})

test('getShowById', async t => {
  const show = await getShowById('139')

  t.pass('request should not fail')

  t.assert(Show.assert(show), 'should return show object')

  t.end()
})

test('getShowWithCastById', async t => {
  const show = await getShowWithCastById('139')

  t.pass('request should not fail')

  t.assert(Show.assert(show), 'should return show object')

  t.assert(show.cast, 'cast array should inited')

  t.end()
})

test('createGetLastShows', async t => {
  const getLastShows = createGetLastShows()

  const shows = [
    ...(await getLastShows()),
    ...(await getLastShows()),
    ...(await getLastShows()),
    ...(await getLastShows()),
  ]

  t.pass('request should not fail')

  t.assert(shows.length, 'result should not be empty')

  t.assert(shows.every(s => Show.assert(s)), 'should return shows object')

  t.assert(
    shows.every((s, i) => shows.findIndex(u => s.id == u.id) === i),
    'should list a show only once'
  )

  t.end()
})
