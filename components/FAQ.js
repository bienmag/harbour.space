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

  const PlusButton = () => {
    return (
      <div className="flex border-[1px] border-lightgray rounded-full h-5 w-5 p-4 items-center justify-center my-2">
        <button className="text-gray text-2xl">+</button>
      </div>
    )
  }

  const MinusButton = () => {
    return (
      <div className="flex border-[1px] border-purple bg-purple  rounded-full h-5 w-5 p-4 items-center justify-center my-2">
        <button className="text-white text-2xl">-</button>
      </div>
    )
  }

  const filteredItems =
    selectedCategory === 'All'
      ? faqs.items
      : faqs.items.filter((item) => item.type === selectedCategory)

  const isExpanded = (index) => expandedIndexes.includes(index)

  return (
    <div className="p-5 px-5">
      <div className="">
        <div>
          <h1 className="text-3xl text-purple">Frequently Asked Questions</h1>
        </div>
        <div className="pt-8">
          <p className="text-gray"> Filter by:</p>
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
            <div>
              <p className="text-gray font-semibold w-3/4">{item.question}</p>
              {isExpanded(index) ? <MinusButton /> : <PlusButton />}
            </div>
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
