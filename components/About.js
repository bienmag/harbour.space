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

  const AboutNumbers = () => {
    return (
      <div className="p-6">
        <div className="py-2">
          <p className="text-purple">Fellowship value</p>
          <p className="text-gray text-xl">Eur 31,300</p>
        </div>
        <div className="flex justify-between py-2">
          <div>
            <p className="text-purple">Tuition covered</p>
            <p className="text-gray text-xl">Eur 22,900</p>
          </div>
          <div>
            <p className="text-purple">Remaining</p>
            <p className="text-gray text-xl">Eur 8,400</p>
          </div>
        </div>
        <div className="py-2">
          <p className="text-purple">Living Stipend</p>
          <p className="text-gray text-xl">Eur 8,400 (Eur 700/month)</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Picture />
      <AboutText />
      <AboutNumbers />
    </div>
  )
}
