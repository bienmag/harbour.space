'use client'
import { fetchData } from '@/api/api'
import { useEffect, useState } from 'react'
export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchDataFromApi() {
      try {
        const apiData = await fetchData()
        setData(apiData)
      } catch (e) {
        //handle error
      }
    }
    fetchDataFromApi()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-purple">Harbour.Space</div>
    </main>
  )
}
