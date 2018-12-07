import React, { Component, Fragment } from 'react'

import Nav from '../../components/nav/Nav'
import MousePure from './MousePure'
import MouseUnpure from './MouseUnpure'
import Cat from './Cat'

import './PureUnpure.css'

const Button = ({ onClick, clickedTimes }) => (
  <button type="button" onClick={onClick}>
    Clicked {clickedTimes} times!
  </button>
)

export default class extends Component {
  // Use class props to define state instead of this.props in constructor
  state = {
    clicked: 0
  }

  handleClick = () => {
    this.setState({
      clicked: this.state.clicked + 1
    })
  }

  renderCat(mouse) {
    return <Cat mouse={mouse} />
  }

  render() {
    return (
      <Fragment>
        <Nav />

        <h1>Pure Unpure</h1>
        <p>Showcasing several techniques on this page:</p>
        <ul>
          <li>The difference between normal Components and PureComponents</li>
          <li>How to use the "render prop pattern"</li>
          <li>
            In case of PureComponent; How to make sure that it doesn't re-render when parent renders
          </li>
          <li>Usage of `ref`</li>
        </ul>

        <p>
          Note: MouseUnpure and MousePure are the same, except that one extends `Component` and the
          other `PureComponent`.
        </p>

        <h2>Default, un-pure version</h2>
        <p>
          Default react component, extends from `Component`. Will rerender on every parent render.
          <br />
          E.g. a click button below.
        </p>
        <MouseUnpure render={(mouse) => <Cat mouse={mouse} />} className="Field One" />
        <Button onClick={this.handleClick} clickedTimes={this.state.clicked} />

        <h2>Pure, &lt;Cat&gt; as inline function</h2>
        <p>
          Because &lt;Cat&gt; is defined as inline function, it also re-renders on click button.
        </p>
        <MousePure render={(mouse) => <Cat mouse={mouse} />} className="Field Two" />
        <Button onClick={this.handleClick} clickedTimes={this.state.clicked} />

        <h2>Pure, &lt;Cat /&gt; as class method</h2>
        <p />
        <MousePure render={this.renderCat} className="Field Three" />
        <Button onClick={this.handleClick} clickedTimes={this.state.clicked} />
      </Fragment>
    )
  }
}
