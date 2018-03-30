import { h, Component } from 'preact'

export type Box = { top: 0, left: 0, width: 0, height: 0 }

export class Provider extends Component {
  state = {}

  writePosition = (key: string, box: Box): void => this.setState({ [key]: box })

  getPosition = (key: string): Box | null => this.state[key]

  getChildContext() {
    return {
      writePosition: this.writePosition,
      getPosition: this.getPosition,
    }
  }

  render({ children }) {
    return (children && children[0]) || null
  }
}

export const withPositionTracker = C =>
  class WithPositionTracker extends Component {
    render() {
      return (
        <C
          {...this.props}
          writePosition={this.context.writePosition}
          getPosition={this.context.getPosition}
        />
      )
    }
  }
