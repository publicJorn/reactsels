import React, { Component } from 'react'

const defaultColor = '#61dafb'
const highlightColor = 'hotpink'

export default class extends Component {
  constructor(props) {
    super(props)
    this.refEl = React.createRef()
    this.state = {
      style: {
        color: defaultColor
      }
    }
  }

  toggle = () => {
    const color = this.state.style.color

    this.setState({
      style: {
        cursor: 'pointer',
        color: color === defaultColor ? highlightColor : defaultColor,
      }
    })
  }

  render () {
    return (
      <div>
        <p onClick={this.toggle} style={this.state.style}>Click me!</p>
      </div>
    )
  }
}
