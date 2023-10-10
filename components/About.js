import Image from 'next/image'

export default function About({ about, photo }) {
  const Picture = () => {
    return (
      <div className="h-80 w-80 rounded-full bg-pattern flex items-center justify-center">
        <Image
          src={photo}
          alt="pattern"
          width={250}
          height={250}
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
            width: 250,
            height: 250,
            objectFit: 'cover',
          }}
        />
      </div>
    )
  }
  const AboutText = () => {
    return (
      <div className="border-[1px] border-lightgray h-[505px] p-6 ">
        <h1 className="text-purple text-3xl my-4">About the apprenticeship</h1>
        <p className="text-md text-gray ">{about}</p>
      </div>
    )
  }

  return (
    <div>
      <Picture />
      <AboutText />
    </div>
  )
}
