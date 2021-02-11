import React from 'react'

export default function MenuBar() {
  return (
    <div className="menu">
      <p className="number">5 items left</p>
      <div className="filter">
        <button>All</button>
        <button>Active</button>
        <button>Complete</button>
      </div>
      <button>Clear Complete</button>
    </div>
  )
}
