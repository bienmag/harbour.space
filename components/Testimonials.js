export default function Testimonials() {
  const Card = () => {
    return (
      <div className="h-[456px] border-[1px] border-lightgray my-[-170px] bg-white rounded-sm mb-[100px] ">
        <div className="h-1/4 p-6">
          <p className="text-purple">Name</p>
          <p className="text-gray">Researcher</p>
        </div>
        <div className="h-3/4 bg-verylightgray p-6">
          <p className="text-xl text-gray">
            This Fellowship was a turning point in my career. I wouldn't be
            where I am today without the financial support and experience
            offered through the program
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-purple h-64">
        <div className="bg-pattern h-64 w-3/4 stroke-[#1E1E1E] "></div>
      </div>
      <div className="px-5">
        <Card />
      </div>
    </div>
  )
}
