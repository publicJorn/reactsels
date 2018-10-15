import React, { Component } from 'react'

import cat from './cat.png'

class Cat extends Component {
  render() {
    const mouse = this.props.mouse
    const size = 75
    const style = {
      position: 'absolute',
      left: mouse.x,
      top: mouse.y,
      width: `${size}px`,
      height: `${size}px`
    }

    return <img src={cat} alt="cat" style={style} />
  }
}

export default Cat
