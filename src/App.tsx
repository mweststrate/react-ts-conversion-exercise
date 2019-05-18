import React, { Component } from 'react'
import { Item } from './Item'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

type AppProps = {}

class App extends Component<AppProps, { items: Item[]; currentItem: Item }> {
  inputElement = React.createRef<HTMLInputElement>()

  constructor(props: AppProps) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      },
    }
  }

  deleteItem = (key: string) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: '' + Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = (e: React.SyntheticEvent<unknown>) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App
