import Image from 'next/image'

export default function Hero({ data }) {
  const Name = () => {
    return (
      <div>
        <h1>{data.scholarship.name}</h1>
      </div>
    )
  }

  const PoweredBy = () => {
    return (
      <div>
        <div>
          <p>Powered by: </p>
          <p>&nbsp;Zeptolab</p>
        </div>
        <Image
          src={data.scholarship.company.color_logo.rawFile.preview}
          alt="company-logo"
          width={80}
          height={80}
        ></Image>
      </div>
    )
  }

  return (
    <div>
      <Name />
      <PoweredBy />
    </div>
  )
}
