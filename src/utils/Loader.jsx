import React, { Component } from 'react'

class Loader extends Component {
    state = {
        displayMessage: false,
    }

    componentDidMount () {
        // Only show loader after certain delay
        this.timer = setTimeout(this.enableMessage, this.props.delay || 500)
    }

    componentWillUnmount () {
        clearTimeout(this.timer)
    }

    enableMessage = () => {
        this.setState({ displayMessage: true })
    }

    render () {
        return this.state.displayMessage
            ? <div>Providing content...</div>
            : null
    }
}

export default Loader
