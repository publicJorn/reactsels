import React, { Component } from 'react'

export default class extends Component {
  tryMe = (arg) => {
    this.props.fn(arg)
  }

  render() {
    return <p>Say Hello!</p>
  }
}
