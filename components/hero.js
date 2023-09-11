import { Box, Center, Spinner, Text } from '@chakra-ui/react'
import Terminal from 'components/terminal'
import { useEffect, useState } from 'react'

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

const TerminalPrompt = ({ children, path }) => (
  <Text>
    <Text as="span" color="termRed">
      mario
    </Text>
    @
    <Text as="span" color="termYellow">
      macbook
    </Text>{' '}
    {path ? path : '~/Documents/portfolio-website'}{' '}
    <Text as="span" color="termGreen">
      ${' '}
    </Text>
    {children}
  </Text>
)

const GitPull = () => (
  <>
    <Text>remote: Enumerating objects: 5, done.</Text>
    <Text>remote: Counting objects: 100% (5/5), done.</Text>
    <Text>Unpacking objects: 100% (3/3), 724 bytes | 362.00 KiB/s, done.</Text>
    <Text>Fast-forward</Text>
    <Text>
      &nbsp;pages/index.js | 9{' '}
      <Text as="span" color="termRed">
        ++
      </Text>
      <Text as="span" color="termGreen">
        -----
      </Text>
    </Text>
    <Text>&nbsp;1 file changed, 2 deletions(-), 5 insertions(+)</Text>

    <Box h="2"></Box>
  </>
)

const Npm = () => (
  <>
    <Box h="2"></Box>

    <Text>{'> portfolio-website@0.1.0 dev'}</Text>
    <Text>{'> next dev'}</Text>

    <Box h="2"></Box>

    <Text>
      -&nbsp;
      <Text as="span" color="termGreen">
        ready
      </Text>{' '}
      started server on [::]:3000, url: http://localhost:3000
    </Text>
    <Text>
      -&nbsp;
      <Text as="span" color="termMagenta">
        event
      </Text>{' '}
      compiled client and server successfully in 246 ms (18 modules)
    </Text>
    <Text>
      -&nbsp;
      <Text as="span" color="termBlue">
        wait
      </Text>{' '}
      compiling...
    </Text>
  </>
)

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
    <Terminal ip={yourIp}>
      {/* Main content */}
      <Box h="100%" fontFamily="mono" fontSize="xs" p={2}>
        <Text>{`Last login: ${date.weekdayLong} ${date.month} ${date.weekdayShort} ${date.time} on ttys00${
          Math.floor(Math.random() * 5) + 1
        }`}</Text>
        <TerminalPrompt path="~">cd Documents/portfolio-website</TerminalPrompt>
        <TerminalPrompt>tmux</TerminalPrompt>
        <TerminalPrompt>git pull</TerminalPrompt>
        <GitPull />
        <TerminalPrompt>code .</TerminalPrompt>
        <TerminalPrompt>npm run dev</TerminalPrompt>
      </Box>
    </Terminal>
  ) : (
    <Center h={[250, 300, 380]} mt="4" mb="6">
      <Spinner emptyColor="whiteAlpha.500" color="gray.400" size="xl" thickness="3px" />
    </Center>
  )
}

export default Hero
