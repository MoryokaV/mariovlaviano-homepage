import { Box, Center, Spinner, Text } from '@chakra-ui/react'
import Terminal from 'components/terminal'
import { useEffect, useState, useRef } from 'react'
import Typed from 'typed.js'

function getRandomDate(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

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
    setDate(getRandomDate(new Date(2012, 0, 1), new Date()))
    fetchClientIp()
  }, [])

  return !loading ? (
    <Terminal ip={yourIp} date={date}/>
  ) : (
    <Center h={[250, 300, 380]} mt="4" mb="6">
      <Spinner emptyColor="whiteAlpha.500" color="gray.400" size="xl" thickness="3px" />
    </Center>
  )
}

export default Hero
