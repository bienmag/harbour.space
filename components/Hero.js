'use client'
import Image from 'next/image'
import { useViewport } from '@/lib/viewport'

export default function Hero({ data }) {
  const Name = () => {
    return (
      <div className="pt-8">
        <h1 className="text-purple text-3xl">{data.scholarship.name}</h1>
      </div>
    )
  }

  const PoweredBy = () => {
    return (
      <div className="my-4 text-gray text-xs">
        <div className="flex">
          <p>Powered by: </p>
          <p className="font-semibold">&nbsp;Zeptolab</p>
        </div>
        <Image
          className="py-2"
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
      <div className="border-[1px] border-lightgray h-20 p-2 my-4">
        <div className="p-3">
          <p className="text-purple text-sm ">Apllication closes in</p>
          <p className="text-gray">6 Day : 22 Hrs : 56 Min : 13 Sec</p>
        </div>
      </div>
    )
  }

  const Info = () => {
    return (
      <div className=" my-4 text-sm border-[1px] border-lightgray h-36 grid grid-cols-2 p-6  ">
        <div>
          <p className="text-purple">Location</p>
          <p>{data.scholarship.location.name}</p>
        </div>
        <div>
          <p className="text-purple">Duration</p>
          <p>{data.scholarship.duration} year</p>
        </div>
        <div>
          <p className="text-purple">Start date</p>
          <p>30 November 2020</p>
        </div>
        <div>
          <p className="text-purple">End date</p>
          <p>30 December 2020</p>
        </div>
      </div>
    )
  }

  const Description = () => {
    return mobile ? (
      <div className="px-4">
        <p className="text-gray font-semibold py-4">
          A fully funded work-study program to launch your tech career
        </p>
        <p className="text-gray py-4">{data.scholarship.description[0].data}</p>
        <button className="my-4 bg-purple text-white rounded-full  text-[10px] py-2 px-5">
          Apply Now
        </button>
      </div>
    ) : (
      <div>
        <p className="text-gray font-semibold py-4">
          A fully funded work-study program to launch your tech career
        </p>
        <p className="text-gray py-4">{data.scholarship.description[0].data}</p>
        <button className="my-4 bg-purple text-white rounded-full  text-[10px] py-2 px-6">
          Apply Now
        </button>
      </div>
    )
  }

  const { width } = useViewport()
  const breakpoint = 790
  const mobile = width < breakpoint

  return mobile ? (
    <div className="pt-9 px-5">
      <div>
        <Name />
        <PoweredBy />
        <ApplicationCloses />
        <Info />
        <Description />
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-2 p-24">
      <div className="px-16">
        <Name />
        <Description />
      </div>
      <div className="px-16">
        <PoweredBy />
        <ApplicationCloses />
        {/* <div className="bg-pattern relative mt-16 h-52 w-3/4 mx-auto stroke-[#1E1E1E] "></div> */}
        <Info />
      </div>
    </div>
  )
}
