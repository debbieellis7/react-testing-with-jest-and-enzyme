import React from 'react'
import { mount } from 'enzyme'
import { findByTestAttr } from '../test/testUtils'
import guessedWordsContext from './contexts/guessedWordsContext'
import successContext from './contexts/successContext'
import Input from './Input'
import GuessedWords from './GuessedWords'

function setup(guessedWords = [], secretWord = 'party') {
  const wrapper = mount(
    <guessedWordsContext.GuessedWordsProvider>
      <successContext.SuccessProvider>
        <Input secretWord={secretWord} />
        <GuessedWords />
      </successContext.SuccessProvider>
    </guessedWordsContext.GuessedWordsProvider>
  )

  const inputBox = findByTestAttr(wrapper, 'input-box')
  const submitButton = findByTestAttr(wrapper, 'submit-button')

  // prepopulate guessedWords context by simulating word guess
  guessedWords.map(word => {
    const mockEvent = { target: { value: word } }
    inputBox.simulate('change', mockEvent)
    submitButton.simulate('click')
  })

  return [wrapper, inputBox, submitButton]
}

describe('test word guesses', () => {

  let wrapper
  let inputBox
  let submitButton

  beforeEach(() => {
    [wrapper, inputBox, submitButton] = setup('party')
  })

  describe('correct guess', () => {

    beforeEach(() => {
      const mockEvent = { target: { value: 'party' } }
      inputBox.simulate('change', mockEvent)
      submitButton.simulate('click')
    })

    test('Input component contains no children', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input')

      expect(inputComponent.children().length).toBe(0)
    })
  })

  describe('incorrect guess', () => {

    beforeEach(() => {
      const mockEvent = { target: { value: 'train' } }
      inputBox.simulate('change', mockEvent)
      submitButton.simulate('click')
    })

    test('Input box remains', () => {
      expect(inputBox.exists()).toBe(true)
    })
  })
})
