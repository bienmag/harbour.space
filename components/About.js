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

  return (
    <div>
      <Picture />
    </div>
  )
}
