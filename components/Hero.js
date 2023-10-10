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

  const ApplicationCloses = () => {
    return (
      <div>
        <div>
          <p>Apllication closes in</p>
          {/* expiration date is hardcoded as it's already expired in the api */}
          <p>6 Day : 22 Hrs : 56 Min : 13 Sec</p>
        </div>
      </div>
    )
  }

  const Info = () => {
    return (
      <div>
        <div>
          <p>Location</p>
          <p>{data.scholarship.location.name}</p>
        </div>
        <div>
          <p>Duration</p>
          <p>{data.scholarship.duration} year</p>
        </div>
        <div>
          <p>Start date</p>
          <p>{data.scholarship.scholarship_start_date}</p>
        </div>
        <div>
          <p>End date</p>
          <p>{data.scholarship.application_end_date} year</p>
        </div>
      </div>
    )
  }

  const Description = () => {
    return (
      <div>
        <p>A fully funded work-study program to launch your tech career</p>
        <p>{data.scholarship.description[0].data}</p>
        <button>Apply Now</button>
      </div>
    )
  }

  return (
    <div>
      <Name />
      <PoweredBy />
      <ApplicationCloses />
      <Info />
      <Description />
    </div>
  )
}
