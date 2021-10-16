import React, { Component } from 'react'

function TodoItems({ entries, deleteItem }) {
  return (
    <ul className="theList">
      {entries.map(item => (
        <li key={item.key} onClick={() => deleteItem(item.key)}>
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export default TodoItems
