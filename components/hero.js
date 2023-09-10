import { Box, Center, Circle, Flex, HStack, Spacer, Spinner, Text, shouldForwardProp, useColorModeValue } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
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

const ArrowRight = chakra(Box, {
  shouldForwardProp: prop => shouldForwardProp(prop),
  baseStyle: {
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderLeft: "10px solid black",
    borderBottom: "10px solid transparent",
    bg: "transparent",
  }
});

const OutlineArrowRight = chakra(Box, {
  shouldForwardProp: prop => shouldForwardProp(prop),
  baseStyle: {
    width: "11px",
    height: "11px",
    borderTop: "1px solid gray",
    borderRight: "1px solid gray",
    transform: "rotate(45deg) translateY(60%)"
  }
});

const ArrowLeft = chakra(Box, {
  shouldForwardProp: prop => shouldForwardProp(prop),
  baseStyle: {
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderRight: "10px solid black",
    borderBottom: "10px solid transparent",
    bg: "transparent",
  }
});

const Hero = () => {
  const [yourIp, setYourIp] = useState("")
  const [date, setDate] = useState({})
  const [loading, setLoading] = useState(true)

  // Colors
  const terminalBorderColor = useColorModeValue('blackAlpha.300', '#393940')
  const terminalTopbarColior = useColorModeValue('lightBodyDimmed', 'darkBodyDimmed')
  const tmuxStatusLineColor = useColorModeValue('tmuxStatusBgLight', 'tmuxStatusBgDark')
  const tmuxBlockFg = useColorModeValue('#f0e7db', 'black')
  const tmuxActiveTabBg = useColorModeValue('#2aa198', 'tmuxActiveTab')
  const tmuxBigArrowBg = useColorModeValue('#f4f0e9', '#f0e7db')
 
  const fetchClientIp = async () => {
    const data = await fetch('https://api.ipify.org?format=json').then(response => response.json())

    setYourIp(data.ip)
    setLoading(false)
  }

  useEffect(() => {
    setDate(getRandomDate(new Date(2012, 0, 1), new Date()))
    fetchClientIp();
  }, [])

  return !loading ? (
    <Flex
      direction="column"
      h={[250, 300, 380]}
      mt="4"
      mb="6"
      borderRadius="lg"
      borderWidth="1px"
      borderColor={terminalBorderColor}
      overflow="hidden"
    >
      <Flex py="2" px="3" gap="3" justify="space-between" bg={terminalTopbarColior}>
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
        <Box h="100%" fontFamily="mono" fontSize="xs" p={2}>
          <Text>{`Last login: ${date.weekdayLong} ${date.month} ${date.weekdayShort} ${date.time} on ttys002`}</Text>
          <Text><Text as="span" color="solarizedRed">mario</Text>@<Text as="span" color="solarizedYellow">macbook</Text> ~ <Text as="span" color="solarizedGreen">$</Text> tmux</Text>
          <Text><Text as="span" color="tokyoRed">mario</Text>@<Text as="span" color="tokyoYellow">macbook</Text> ~ <Text as="span" color="tokyoBrightGreen">$</Text></Text>
        </Box>
      <Flex bg={tmuxStatusLineColor} lineHeight="5" fontWeight="bold" fontSize="sm" fontFamily="mono">
        <Box bg={tmuxBigArrowBg} color="black" px="2">0</Box><ArrowRight borderLeftColor={tmuxBigArrowBg} bg="#93a1a1"/>
        <Box bg="#93a1a1" color={tmuxBlockFg} px="2">moryoka</Box><ArrowRight borderLeftColor="#93a1a1"/>
        <ArrowRight borderLeftColor={tmuxStatusLineColor} bg={tmuxBigArrowBg}/><Box bg={tmuxBigArrowBg} color="black" px="2">0</Box><ArrowRight borderLeftColor={tmuxBigArrowBg} bg={tmuxActiveTabBg}/>
        <Box bg={tmuxActiveTabBg} px="3" color="white">zsh</Box><ArrowRight borderLeftColor={tmuxActiveTabBg} />
        <Box px="2" fontWeight="normal" color="gray">1</Box><OutlineArrowRight/><Box color="gray" px="2" fontWeight="normal">nvim</Box>

        <Spacer/>
        
        <ArrowLeft borderRightColor="#657b83"/><ArrowLeft borderRightColor="#93a1a1" bg="#657b83"/><Box px="2" bg="#93a1a1" color={tmuxBlockFg}>{yourIp}</Box>
      </Flex>
    </Flex>
  ) : <Center h={[250, 300, 380]} mt="4" mb="6"><Spinner emptyColor="whiteAlpha.500" color="gray.400" size="xl" thickness="3px"/></Center> 
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
