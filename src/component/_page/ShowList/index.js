import { ShowList as Dumb } from './Dumb'
import withShows from '~/component/_container/withShows'
import { withPositionTracker } from '~/component/_abstract/positionTracker'

export const ShowList = withPositionTracker(withShows(Dumb))
