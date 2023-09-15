import { Center, Spinner } from '@chakra-ui/react'
import Terminal from 'components/terminal'
import { useEffect, useState } from 'react'

function getCurrentDate() {
  const date = new Date()

  const weekdayLong = date.toLocaleDateString('en-EN', { weekday: 'short' })
  const weekdayShort = date.toLocaleDateString('en-EN', { day: '2-digit' })
  const month = date.toLocaleDateString('en-EN', { month: 'short' })
  const time =
    String(date.getHours()).padStart(2, '0') +
    ':' +
    String(date.getMinutes()).padStart(2, '0') +
    ':' +
    String(date.getSeconds()).padStart(2, '0')

  return {
    weekdayLong,
    weekdayShort,
    month,
    time
  }
}

const Hero = () => {
  const [yourIp, setYourIp] = useState('')
  const [date, setDate] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchClientIp = async () => {
    const data = await fetch('https://api.ipify.org?format=json').then(response => response.json())

    setYourIp(data.ip)
    setLoading(false)
  }

  useEffect(() => {
    setDate(getCurrentDate())
    fetchClientIp()
  }, [])

  return !loading ? (
    <Terminal ip={yourIp} date={date} />
  ) : (
    <Center h={[250, 320, 410]} mt="4" mb="6">
      <Spinner emptyColor="whiteAlpha.500" color="gray.400" size="xl" thickness="3px" />
    </Center>
  )
}

export default Hero
