import 'unfetch/polyfill'
import { h, render } from 'preact'
import { App } from '~/component/App'

render(<App />, document.body, document.getElementById('app'))
