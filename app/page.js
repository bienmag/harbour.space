import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
export const dynamic = 'force-dynamic'

const fetchData = async () => {
  try {
    const response = await fetch(
      'https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab'
    )
    if (!response.ok) {
      throw new Error('Could not fetch the data')
    }
    const data = await response.json()
    return data
  } catch (e) {
    console.log('Error fetching data:', e)
    throw e
  }
}

export default async function Home() {
  const fetchedData = await fetchData()

  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between py-24">
      <div>
        <Hero data={fetchedData} />
        <About
          photo={fetchedData.scholarship.program.photos[0].src}
          about={fetchedData.scholarship.about[0].data}
        />
        <Testimonials />
        <FAQ faqs={fetchedData.scholarship.faqs} />
      </div>
    </main>
  )
}
