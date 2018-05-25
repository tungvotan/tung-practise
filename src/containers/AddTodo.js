// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, fetchSuggestion } from '../actions'

type Props = {
  addTodo: typeof addTodo,
  fetchSuggestion: typeof fetchSuggestion,
  suggestions: Array<*>
}

type State = {
  value: string,
  isFocused: boolean
}
class AddTodo extends Component<Props, State> {

  state = {
    value: '',
    isFocused: false
  }

  constructor(props: Props) {
    super(props)

    this._callAPI = this.debounce(this._callAPI, 500)
  }

  handleSubmit = e => {
    e.preventDefault()
    const value = this.state.value
    if (value) {
      if (!value.trim()) {
        return
      }

      this.props.addTodo(value)
      this.setState({ value: '' })
    }
  }

  debounce = (func: Function, wait: number) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  _callAPI = v => {
    console.log(v);

    this.props.fetchSuggestion(v)
  }

  _handleOnFocus = () => {
    this.setState({
      isFocused: true
    })
  }

  _handleOnItemClick = (suggestion) => {
    const title = suggestion.data[0].title

    this.setState({ value: title, isFocused: false })
  }

  handleInputChange = (e) => {
    if (e.target != null) {
      this.setState({ value: e.target.value })
      this._callAPI(e.target.value)
    }
  }

  render() {
    const { suggestions } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{ position: 'relative' }}>
            <input
              autoFocus
              onChange={this.handleInputChange}
              onFocus={this._handleOnFocus}
              value={this.state.value}
            />
            {suggestions.length && this.state.isFocused ?
              <div style={{ position: 'absolute', top: '100%' }}>
                {suggestions.map(suggestion =>
                  <div
                    key={suggestion.data[0].nasa_id}
                    onClick={() => this._handleOnItemClick(suggestion)}
                    style={{ padding: 16, backgroundColor: '#FFF' }}>
                      {suggestion.data[0].title.substring(0, 20)}...
                  </div>
                )}</div>
              : ''}
            <button type="submit">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state: Object) => ({
  suggestions: state.suggestion
})


export default connect(mapStateToProps, { addTodo, fetchSuggestion })(AddTodo)
