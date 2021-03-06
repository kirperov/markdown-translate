import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { sampleText } from './sampleText'
import marked from 'marked'
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    text: sampleText 
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  componentDidUpdate() {
    const { text } = this.state 
    localStorage.setItem('text', text)
  }

  componentDidMount() {
    const text = localStorage.getItem('text')
    if(text) {
      this.setState({ text })  
    } else {
      this.setState({ text: sampleText})
    }
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
            <div dangerouslySetInnerHTML={ this.renderText(this.state.text) }></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
