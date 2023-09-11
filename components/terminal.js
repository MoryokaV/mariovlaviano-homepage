import { Flex, HStack, Circle, Box, Text, chakra, shouldForwardProp, useColorModeValue } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { TmuxStatusline } from './tmux'

const TerminalWindow = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
  baseStyle: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const TerminalTopbar = ({ title }) => (
  <Flex py="2" px="3" gap="3" justify="space-between" bg="bodyDimmed">
    <HStack spacing="8px">
      <Circle size="12px" bg="red.400" borderColor="red.500" borderWidth="1px"></Circle>
      <Circle size="12px" bg="yellow.400" borderColor="yellow.500" borderWidth="1px"></Circle>
      <Circle size="12px" bg="green.400" borderColor="green.500" borderWidth="1px"></Circle>
    </HStack>
    <Text isTruncated fontWeight="medium" fontSize="sm">
      {title}
    </Text>
    <Box w={{ sm: '50px' }}></Box>
  </Flex>
)

const Terminal = ({ children, ip }) => {
  const terminalWindowShadow = useColorModeValue('xl', 'dark-lg')

  return (
    <TerminalWindow
      h={[250, 300, 380]}
      mt="4"
      mb="8"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="terminalBorder"
      overflow="hidden"
      shadow={terminalWindowShadow}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <TerminalTopbar title="~/Documents/portfolio-website" />

      {children}

      <TmuxStatusline ip={ip} />
    </TerminalWindow>
  )
}

export default Terminal
