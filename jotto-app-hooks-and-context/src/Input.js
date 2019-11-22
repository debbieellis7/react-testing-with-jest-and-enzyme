import React from 'react'
import PropTypes from 'prop-types'

function Input({ secretWord  }) {
  const [ currentGuess, setCurrentGuess ] = React.useState('')

  return (
    <div data-test='component-input'>
      <form data-test='component-input'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
         >
          Submit
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
