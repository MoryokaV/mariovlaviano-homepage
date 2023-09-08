import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

import lightDesk from '../public/images/desk-light.jpg'
import darkDesk from '../public/images/desk-dark.jpg'
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

const Hero = () => {
  const [date, setDate] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setDate(getRandomDate(new Date(2012, 0, 1), new Date()))
    setTimeout(() => setLoading(false), 250)
  }, [])

  return (
    <Box
      w="100%"
      h={[250, 300, 380]}
      mt="3"
      mb="4"
      borderRadius="lg"
      borderWidth="1px"
      borderColor={useColorModeValue('blackAlpha.300', '#393940')}
      overflow="hidden"
    >
      <Flex py="2" px="3" gap="3" justify="space-between" bg={useColorModeValue('lightBodyDimmed', 'darkBodyDimmed')}>
        <HStack spacing="8px">
          <Circle size="12px" bg="red.400" borderColor="red.500" borderWidth="1px"></Circle>
          <Circle size="12px" bg="yellow.400" borderColor="yellow.500" borderWidth="1px"></Circle>
          <Circle size="12px" bg="green.400" borderColor="green.500" borderWidth="1px"></Circle>
        </HStack>
        <Text isTruncated fontWeight="medium" fontSize="sm">
          ~/Documents/portfolio-website
        </Text>
        <Box w={{ sm: '50px' }}></Box>
      </Flex>
      {!loading && (
        <Box h="100%" fontFamily="mono" fontSize="xs" p={2}>
          <Text>{`Last login: ${date.weekdayLong} ${date.month} ${date.weekdayShort} ${date.time} on ttys002`}</Text>
        </Box>
      )}
    </Box>
  )
  /*
  return (

    <Box
      h={[250, 300, 380]}
      maxH="50%"
      overflow="hidden"
      position="relative"
      mb={6}
      boxShadow={`0 0 8px 8px ${useColorModeValue('#f0e7db', '#202023')} inset`}
      //bgImage={`url('/images/desk3-${useColorModeValue('light', 'dark')}.jpg')`}
      //bgPosition="center"
      //bgRepeat="no-repeat"
      //bgSize="cover"
      borderRadius="28px"
    >
      <Image
        src={useColorModeValue(lightDesk, darkDesk)}
        style={{zIndex: -1}}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 768px"
        priority={true}
        fill={true}
        alt="mario's desk hero image"
      />
    </Box>
  )
  */
}

export default Hero
