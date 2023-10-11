'use client'

import { useEffect, useState } from 'react'

export default function FAQ({ faqs }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedIndexes, setExpandedIndexes] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectOption = (value) => {
    setSelectedCategory(value)
    setIsOpen(false)
  }
  const expandAnswer = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index))
    } else {
      setExpandedIndexes([...expandedIndexes, index])
    }
  }

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        isOpen &&
        !event.target.closest('#customSelectOptions') &&
        !event.target.closest('#customSelectButton')
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [isOpen])

  const isExpanded = (index) => expandedIndexes.includes(index)

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

  return (
    <div className="px-5">
      <div>
        <h1 className="text-3xl text-purple">Frequently Asked Questions</h1>
      </div>
      <div className="pt-8">
        <p className="text-gray"> Filter by:</p>
        <div className="relative">
          <div className="relative z-10">
            <div className="w-full relative">
              <div className="w-full">
                {!isOpen && (
                  <div
                    className="appearance-none w-full border text-purple border-lightgray rounded-full p-4 focus:outline-none"
                    id="customSelectButton"
                    onClick={toggleDropdown}
                  >
                    {selectedCategory}
                  </div>
                )}
                {isOpen && (
                  <div
                    className="absolute text-purple top-full left-0 w-full  bg-white border border-lightgray rounded-3xl shadow-lg"
                    id="customSelectOptions"
                  >
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 cursor-pointer"
                        onClick={toggleDropdown}
                      >
                        {selectedCategory}
                      </li>
                      <li
                        className={`px-4 py-2 cursor-pointer ${
                          selectedCategory === 'All'
                            ? 'bg-lightgray text-black'
                            : 'bg-white'
                        }`}
                        onClick={() => handleSelectOption('All')}
                      >
                        All
                      </li>
                      {faqs.categories.map((category, index) => (
                        <li
                          key={index}
                          className={`px-4 py-2 cursor-pointer ${
                            category === selectedCategory
                              ? 'bg-lightgray text-black'
                              : 'bg-white'
                          }`}
                          onClick={() => handleSelectOption(category)}
                        >
                          {category}
                        </li>
                      ))}
                      <li
                        className="px-4 py-2 cursor-pointer"
                        onClick={() => handleSelectOption('All')}
                      ></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <select
              className="hidden"
              id="hiddenSelect"
              onChange={handleSelectCategory}
            >
              {faqs.categories.map((category, index) => (
                <option key={index} label={category} value={category}></option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="pt-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => expandAnswer(index)}
            className="cursor-pointer"
          >
            {/* <p className="text-purple">{item.type}</p> */}
            <div className="flex justify-between">
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
            <hr className="border-t-[1px] my-3 border-lightgray" />
          </div>
        ))}
      </div>
    </div>
  )
}
