'use client'

export default function FAQ({ faqs }) {
  return (
    <div>
      <div className="flex">
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
      <div>
        {faqs.items.map((item, index) => (
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
