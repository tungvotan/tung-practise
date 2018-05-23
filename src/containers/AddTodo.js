// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
type State = {
  value: string
}
class AddTodo extends Component<*, State> {
  
  state = {
    value: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const value = this.state.value
    if (value) {
      if (!value.trim()) {
        return
      }
      
      this.props.addTodo(value)
      this.setState({
        value: ''
      })
    }
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleInputChange} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }  
} 

const mapDispatchToProps = (dispatch) => ({
  addTodo: (value) => dispatch(addTodo(value))
})

export default connect(null, mapDispatchToProps)(AddTodo)
