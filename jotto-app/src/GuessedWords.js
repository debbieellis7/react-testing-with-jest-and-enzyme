import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  return (
    <div />
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
