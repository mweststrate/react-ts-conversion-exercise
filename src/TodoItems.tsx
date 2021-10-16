import React from 'react'
import { Item } from './Item'

function TodoItems({ entries, deleteItem }: { entries: Item[]; deleteItem: (key: string) => void }) {
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
