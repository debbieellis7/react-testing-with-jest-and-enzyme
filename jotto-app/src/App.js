import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import { getSecretWord } from './actions'

class App extends Component {
  render() {
    const {
      success,
      guessedWords
    } = this.props

    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state
  return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(App)
