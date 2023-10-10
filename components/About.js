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

  const StudyCommitment = () => {
    return (
      <div className="border-[1px] my-4 p-6 border-lightgray">
        <p className="text-purple">Study Commitment</p>
        <p className="text-xl">3 hours / day</p>

        <p>
          You will complete 15 modules to graduate. Daily classes are 3 hours,
          plus coursewrork to complete in your own time.
        </p>
      </div>
    )
  }
  const ApprenticeshipCommitment = () => {
    return (
      <div className="border-[1px] my-4 p-6 border-lightgray">
        <p className="text-purple">Apprenticeship Commitment</p>
        <p className="text-xl">4 hours / day</p>
        <p>
          Immerse yourself in the professional world during your apprenticeship.
          You'll learn the ropes from the best and get to apply your newly
          acquired knowledge in the field from day one.
        </p>
      </div>
    )
  }

  const Graduation = () => {
    return (
      <div>
        <div className="text-center relative">
          <div className="absolute inset-y-1/2 left-0 right-0 border-t-[1px] border-lightgray transform -translate-y-1/2"></div>
          <p className="inline-block bg-white px-8 py-2 relative z-10">
            GRADUATION
          </p>
        </div>
        <div className="border-[1px] my-4 p-6 border-lightgray">
          <p className="text-purple">A Full-Time Contract</p>
          <p className="text-xl">1 Year Full-Time</p>
          <p>
            You'll be guaranteed a 1 year contract with SCG upon graduation.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div>
        <div className="absolute left-0 w-5 mt-40  bg-purple h-[320px]"></div>
        <div className="absolute right-0 w-5 mt-40  bg-purple h-[320px]"></div>
      </div>
      <Picture />
      <AboutText />
      <AboutNumbers />
      <StudyCommitment />
      <ApprenticeshipCommitment />
      <Graduation />
    </div>
  )
}
