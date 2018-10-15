import React, { PureComponent } from 'react'

// Same as Component variant, but extends PureComponent
class Mouse extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { x: 0, y: 0 }
    this.field = React.createRef()
  }

  componentDidMount() {
    console.log(`MousePure mounted`)
  }

  handleMouseMove = (event) => {
    const rect = this.field.current.getBoundingClientRect()
    this.setState({
      x: event.clientX - rect.x,
      y: event.clientY - rect.y
    })
  }

  render() {
    const { className } = this.props
    console.log('MousePure renders')

    return (
      <div
        ref={this.field}
        className={className}
        style={{ height: '200px' }}
        onMouseMove={this.handleMouseMove}
      >
        {/* accomodate "render prop pattern" -to show the Cat */}
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default Mouse
