'use client'
import Image from 'next/image'
import { useViewport } from '@/lib/viewport'
export default function About({ about, photo }) {
  const Picture = () => {
    return mobile ? (
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
    ) : (
      <div className="h-[280px] w-[280px] rounded-full  border-[1px] border-lightgray bg-pattern flex items-center justify-center">
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
    return mobile ? (
      <div className="border-[1px] border-lightgray h-[505px] p-6 ">
        <h1 className="text-purple text-3xl my-4">About the apprenticeship</h1>
        <p className="text-md text-gray ">{about}</p>
      </div>
    ) : (
      <div className="pb-24 p-6 ">
        <h1 className="text-purple text-3xl my-4">About the apprenticeship</h1>
        <p className="text-md text-gray ">{about}</p>
      </div>
    )
  }

  const AboutNumbers = () => {
    return mobile ? (
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
    ) : (
      <div className="border-[1px] my-4 p-6 mx-4 border-lightgray grid grid-rows-2 ">
        <div className=" h-[200px]">
          <p className="text-purple pb-4">Scholarship value</p>
          <p className="text-3xl">Eur 31,300</p>
        </div>
        <div>
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
      </div>
    )
  }

  const StudyCommitment = () => {
    return mobile ? (
      <div className="border-[1px] my-4 p-6 border-lightgray">
        <p className="text-purple">Study Commitment</p>
        <p className="text-xl">3 hours / day</p>

        <p>
          You will complete 15 modules to graduate. Daily classes are 3 hours,
          plus coursewrork to complete in your own time.
        </p>
      </div>
    ) : (
      <div className="border-[1px]  m-4 p-6 border-lightgray">
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
          You&rsquo;ll learn the ropes from the best and get to apply your newly
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
            You&rsquo;ll be guaranteed a 1 year contract with SCG upon
            graduation.
          </p>
        </div>
      </div>
    )
  }

  const { width } = useViewport()
  const breakpoint = 790
  const mobile = width < breakpoint

  return mobile ? (
    <div className="flex flex-col px-5">
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
  ) : (
    <div className="pb-24 pl-24 pr-24">
      <div className="grid grid-cols-2 px-16 ">
        <Picture />
        <AboutText />
      </div>
      <div className="grid grid-cols-3">
        <div>
          <AboutNumbers />
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2">
            <StudyCommitment />
            <ApprenticeshipCommitment />
          </div>
          <Graduation />
        </div>
      </div>
    </div>
  )
}
