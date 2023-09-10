import { Box, Center, Circle, Flex, HStack, Spacer, Spinner, Text, shouldForwardProp, useColorModeValue } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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

  const terminalWindowShadow = useColorModeValue("xl", "dark-lg")


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
      as={motion.div}
      direction="column"
      h={[250, 300, 380]}
      mt="4"
      mb="8"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="terminalBorder"
      overflow="hidden"
      shadow={terminalWindowShadow}
      initial={{scale: 0.5}}
      animate={{scale: 1}}
      whileHover={{scale: 1.02}}
      transition={{duration: 3}}
    >
      {/* Topbar */}
      <Flex py="2" px="3" gap="3" justify="space-between" bg="bodyDimmed">
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

      {/* Main content */}
      <Box h="100%" fontFamily="mono" fontSize="xs" p={2}>
        <Text>{`Last login: ${date.weekdayLong} ${date.month} ${date.weekdayShort} ${date.time} on ttys002`}</Text>
        <Text><Text as="span" color="termRed">mario</Text>@<Text as="span" color="termYellow">macbook</Text> ~ <Text as="span" color="termGreen">$ </Text>tmux</Text>
        <Text><Text as="span" color="termRed">mario</Text>@<Text as="span" color="termYellow">macbook</Text> ~ <Text as="span" color="termGreen">$ </Text>git pull</Text>
      </Box>

      {/* Tmux statusline */}
      <Flex bg="tmuxStatusBg" lineHeight="5" fontWeight="bold" fontSize="sm" fontFamily="mono">
        <Box bg="tmuxBigArrowBg" color="black" px="2">0</Box><ArrowRight borderLeftColor="tmuxBigArrowBg" bg="tmuxBlockPrimaryBg"/>
        <Box bg="tmuxBlockPrimaryBg" color="tmuxBlockFg" px="2">moryoka</Box><ArrowRight borderLeftColor="tmuxBlockPrimaryBg"/>
        <ArrowRight borderLeftColor="tmuxStatusBg" bg="tmuxBigArrowBg"/><Box bg="tmuxBigArrowBg" color="black" px="2">0</Box><ArrowRight borderLeftColor="tmuxBigArrowBg" bg="tmuxActiveTabBg"/>
        <Box bg="tmuxActiveTabBg" px="3" color="white">zsh</Box><ArrowRight borderLeftColor="tmuxActiveTabBg" />
        <Box px="2" fontWeight="normal" color="gray">1</Box><OutlineArrowRight/><Box color="gray" px="2" fontWeight="normal">nvim</Box>

        <Spacer/>
        
        <ArrowLeft borderRightColor="tmuxBlockSecondaryBg"/><ArrowLeft borderRightColor="tmuxBlockPrimaryBg" bg="tmuxBlockSecondaryBg"/><Box px="2" bg="tmuxBlockPrimaryBg" color="tmuxBlockFg">{yourIp}</Box>
      </Flex>
    </Flex>
  ) : <Center h={[250, 300, 380]} mt="4" mb="6"><Spinner emptyColor="whiteAlpha.500" color="gray.400" size="xl" thickness="3px"/></Center> 
}

export default Hero
