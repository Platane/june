import { App as Dumb } from './Dumb'
import withCssReset from '~/component/_abstract/cssReset'
import withRoute from '~/component/_container/withRoute'

export const App = withCssReset(withRoute(Dumb))
