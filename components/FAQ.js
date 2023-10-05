'use client'

import { useState } from 'react'

export default function FAQ({ faqs }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleSelectCategory(event) {
    setSelectedCategory(event.target.value)
  }

  const filteredItems =
    selectedCategory === 'All'
      ? faqs.items
      : faqs.items.filter((item) => item.type === selectedCategory)

  return (
    <div>
      <div className="flex">
        <div>
          <h1>Frequently asked questions</h1>
        </div>
        <div>
          <p> Filter by:</p>
          <select onChange={handleSelectCategory}>
            <option value={'All'}>All</option>
            {faqs.categories.map((category, index) => (
              <option key={index} label={category} value={category}></option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {filteredItems.map((item, index) => (
          <div key={index}>
            <p>{item.type}</p>
            <p>{item.question}</p>
            {item.answer.map((a, index) => (
              <p key={index}>{a.data}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
