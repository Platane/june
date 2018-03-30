import { h, Component } from 'preact'
import styled from 'preact-emotion'

import { Show } from '~/component/_page/Show'
import { ShowList } from '~/component/_page/ShowList'

export const Content = ({ router, ...props }) => {
  switch (router.key) {
    case 'showList':
      return <ShowList {...props} />

    case 'show':
      return <Show showId={router.param.showId} {...props} />

    default:
      return null
  }
}

export const App = props => <Content {...props} />
