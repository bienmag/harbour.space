export default function Hero({ data }) {
  const Name = () => {
    return (
      <div>
        <h1>{data.scholarship.name}</h1>
      </div>
    )
  }

  return (
    <div>
      <Name />
    </div>
  )
}
