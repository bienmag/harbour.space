'use client'

export default function FAQ({ faqs }) {
  console.log('faq', faqs.items)
  return (
    <div className="flex ">
      <div>
        <h1>Frequently asked questions</h1>
      </div>
      <div>
        <p> Filter by:</p>
        <select>
          <option value="0">All</option>
          {faqs.categories.map((category, index) => (
            <option key={index} value={index + 1}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
