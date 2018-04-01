import 'unfetch/polyfill'
import { h, render } from 'preact'
import { App } from '~/component/App'
import { Provider as PositionTrackerProvider } from '~/component/_abstract/positionTracker'
import { Provider as StoreProvider } from '~/component/_container/store'

const app = (
  <PositionTrackerProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </PositionTrackerProvider>
)

render(app, document.body, document.getElementById('app'))
