import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { sampleText } from './sampleText'

import { render } from '@testing-library/react';

class App extends Component {
  state = {
    text: sampleText 
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea className="form-control"
                      onChange={ this.handleChange }
                      rows="35"
                      value={ this.state.text }>
            </textarea>
          </div>
          <div className="col-sm-6">
          { sampleText }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
