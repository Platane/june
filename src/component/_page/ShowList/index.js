import { ShowList as Dumb } from './Dumb'
import withLastShows from '~/component/_container/store/withLastShows'
import { withPositionTracker } from '~/component/_abstract/positionTracker'

export const ShowList = withPositionTracker(withLastShows(Dumb))
