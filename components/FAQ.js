'use client'

import { useState } from 'react'

export default function FAQ({ faqs }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedIndexes, setExpandedIndexes] = useState([])

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value)
  }

  const expandAnswer = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index))
    } else {
      setExpandedIndexes([...expandedIndexes, index])
    }
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
          <div onClick={() => expandAnswer(index)} key={index}>
            <p className="text-gray font-semibold w-3/4">{item.question}</p>
            {expandedIndexes.includes(index) && (
              <div className="py-4">
                {item.answer.map((a, index) => (
                  <p key={index}>{a.data}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
