import 'unfetch/polyfill'
import { h, render } from 'preact'
import { App } from '~/component/App'
import { Provider as PositionTrackerProvider } from '~/component/_abstract/positionTracker'

const app = (
  <PositionTrackerProvider>
    <App />
  </PositionTrackerProvider>
)

render(app, document.body, document.getElementById('app'))
