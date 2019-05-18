import React, { Component } from 'react'
import { Item } from './Item'

class TodoList extends Component<{
  inputElement: React.RefObject<HTMLInputElement>
  addItem: React.FormEventHandler<HTMLFormElement>
  currentItem: Item
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}> {
  componentDidUpdate() {
    if (this.props.inputElement.current) this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
