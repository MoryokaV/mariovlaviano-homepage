import { Box, Circle, Flex, HStack, Spacer, Text, shouldForwardProp, useColorModeValue } from '@chakra-ui/react'
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

/*const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid ${(props) => props.color};
  border-bottom: 10px solid transparent;
  background-color: ${(props) => props.back}; 
`*/

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
    transform: "rotate(45deg) translateY(50%)"
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
  const [date, setDate] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setDate(getRandomDate(new Date(2012, 0, 1), new Date()))
    setTimeout(() => setLoading(false), 250)
  }, [])

  return (
    <Flex
      direction="column"
      h={[250, 300, 380]}
      mt="4"
      mb="6"
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
          <Text><Text as="span" color="tokyoRed">mario</Text>@<Text as="span" color="tokyoYellow">macbook</Text> ~ <Text as="span" color="tokyoBrightGreen">$</Text> tmux</Text>
          <Text><Text as="span" color="tokyoRed">mario</Text>@<Text as="span" color="tokyoYellow">macbook</Text> ~ <Text as="span" color="tokyoBrightGreen">$</Text></Text>
        </Box>
      )}
      {!loading && (
      <Flex bg={useColorModeValue('tmuxStatusBgLight', 'tmuxStatusBgDark')} lineHeight="5" fontWeight="bold" fontSize="sm" fontFamily="mono">
        <Box bg="#f0e7db" color="black" px="2">0</Box><ArrowRight borderLeftColor="#f0e7db" bg="#93a1a1"/>
        <Box bg="#93a1a1" color="black" px="2">moryoka</Box><ArrowRight borderLeftColor="#93a1a1"/>
        <ArrowRight borderLeftColor={useColorModeValue("tmuxStatusBgLight", "tmuxStatusBgDark")} bg="#f0e7db"/><Box bg="#f0e7db" color="black" px="2">0</Box><ArrowRight borderLeftColor="#f0e7db" bg="tmuxActiveTab"/>
        <Box bg="tmuxActiveTab" px="3">zsh</Box><ArrowRight borderLeftColor="tmuxActiveTab" />
        <Box px="2" fontWeight="normal" color="gray">1</Box><OutlineArrowRight/><Box color="gray" px="2" fontWeight="normal">nvim</Box>

        <Spacer/>
        
        <ArrowLeft borderRightColor="#657b83"/><ArrowLeft borderRightColor="#93a1a1" bg="#657b83"/><Box px="2" bg="#93a1a1" color="black">192.168.0.112</Box>
      </Flex>
      )}
    </Flex>
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
