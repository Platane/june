import test from 'tape'
import { routeValidator } from '../routeValidator'

const routes = [
  { path: 'a', key: 'a' },
  { path: 'a/b/c', key: 'abc' },
  { path: 'u/w', key: 'uw' },
  { path: 'u/:id', key: 'uid' },
  { path: 'u/y/h', key: 'uyh' },
]

const getRoute = routeValidator(routes)

const equal = (a, b) =>
  a && typeof a === 'object'
    ? b &&
      typeof b === 'object' &&
      Object.keys(a).every(key => equal(a[key], b[key]))
    : a === b

test('router', t => {
  t.assert(
    equal(getRoute('b'), { key: null, param: {}, path: '/' }),
    'should route to null if route does not exist'
  )

  t.assert(
    equal(getRoute('a/b/c'), { key: 'abc', param: {}, path: '/a/b/c' }),
    'should route to valid route'
  )

  t.assert(
    equal(getRoute('a/u/c'), { key: 'a', param: {}, path: '/a' }),
    'should fallback to closest route'
  )

  t.assert(
    equal(getRoute('u/yolo'), {
      key: 'uid',
      param: { id: 'yolo' },
      path: '/u/yolo',
    }),
    'should grab param'
  )

  t.end()
})
