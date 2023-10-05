import FAQ from '@/components/FAQ'
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
    console.log('data', data)
    return data
  } catch (e) {
    console.log('Error fetching data:', e)
    throw e
  }
}

export default async function Home() {
  const fetchedData = await fetchData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FAQ faqs={fetchedData.scholarship.faqs} />
      </div>
    </main>
  )
}
