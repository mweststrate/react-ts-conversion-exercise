import React, { Component } from 'react'
import { Item } from './Item'

class TodoItems extends Component<{
  entries: Item[]
  deleteItem: (key: string) => void
}> {
  createTasks = (item: Item) => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
