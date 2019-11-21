import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../test/testUtils'
import Input from './Input'

/**
 * Setup function for app component.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />)
}

test('Input renders without error', () => {
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, 'component-input')

  expect(inputComponent.length).toBe(1)
})
