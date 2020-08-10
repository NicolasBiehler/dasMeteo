import useSWR from 'swr'

const getData = async (url) => {
  const response = await fetch(url, { method: 'GET' })
  return await response.json()
}

const useDailyEndpoint = (location, appId) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?${location}&appid=${appId}&units=metric`

  return useSWR(url, getData, { refreshInterval: 0 })
}

export default useDailyEndpoint
