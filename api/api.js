export const fetchData = async () => {
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
