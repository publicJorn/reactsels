import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

it('renders without crashing', () => {
  const comp = shallow(<App />)
  expect(comp.find('.App')).toExist()
})
