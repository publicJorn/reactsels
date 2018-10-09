import React from 'react'
import { shallow } from 'enzyme'

import Hello from '../Hello'

it('Can access a class method', () => {
  const callMe = jest.fn()
  const comp = shallow(<Hello fn={callMe} />)

  comp.instance().tryMe('BAM!')
  expect(callMe).toHaveBeenCalledWith('BAM!')
})
