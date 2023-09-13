import { Flex, HStack, Circle, Box, Text, chakra, shouldForwardProp, useColorModeValue } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { TmuxStatusline } from './tmux'
import { useRef, useEffect, useState, forwardRef } from 'react'
import Typed from 'typed.js'

const typeSpeedFast = 100
const typeSpeedSlow = 150
const startDelayFast = 1000
const startDelaySlow = 1500

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

const TerminalPrompt = ({ children, path, display }) => (
  <Text display={display}>
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

const GitPull = forwardRef((props, ref) => {
  /*const gitpullEL = useRef(null)

  useEffect(() => {
    const gitpull = new Typed(gitpullEL, {
      strings: "",
      typeSpeed: 40,
      startDelay: 40,
      onComplete: self => {
        self.destroy()
        
        gitEl.current.textContent = terminalData[2].cmd
        terminalData[2].result();
      }
    })
  }, [])*/

  return <Text display={props.display} ref={ref} whiteSpace="pre-line">
    {/*
    */}
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
  </Text>
})

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

const Terminal = ({ ip, date }) => {
  const projectDir = "~/Documents/portfolio-website"

  const terminalData = [
    {
      cmd: "cd " + projectDir,
      result: () => {
        setTermWindowTitle(projectDir)
        setCmdIndex(1)
      }
    },
    {
      cmd: "tmux",
      result: () => {
        setIsTmuxActive(true)
        setCmdIndex(2)
      }
    },
    {
      cmd: "git pull",
      result: () => {
        setCmdIndex(3)
      } 
    },
    {
      cmd: '^1000 `<Text>remote: Enumerating objects: 5, done.</Text>` ^1000\n `<Text>remote: Counting objects: 100% (5/5), done.</Text>`',
      result: () => {
        setCmdIndex(4)
      }
    }
  ]

  const [termWindowTitle, setTermWindowTitle] = useState("Terminal ~")
  const [isTmuxActive, setIsTmuxActive] = useState(false) 
  const [cmdIndex, setCmdIndex] = useState(0)

  const terminalWindowShadow = useColorModeValue('xl', 'dark-lg')

  const cdEl = useRef(null)
  const tmuxEl = useRef(null)
  const gitEl = useRef(null)
  const gitpullEl = useRef(null)

  useEffect(() => {
    const gitPull = new Typed(gitpullEl.current, {
      strings: [terminalData[3].cmd],
      typeSpeed: 40,
      startDelay: 40,
      onComplete: self => {
        //self.destroy()
        
        //gitpullEl.current.innerHtml = terminalData[3].cmd
        //terminalData[3].result();
      }
    })

    const git = new Typed(gitEl.current, {
      strings: [terminalData[2].cmd],
      typeSpeed: 40,
      startDelay: 40,
      onComplete: self => {
        self.destroy()
        
        gitEl.current.textContent = terminalData[2].cmd
        terminalData[2].result();

        gitPull.start()
      }
    })

    const tmux = new Typed(tmuxEl.current, {
      strings: [terminalData[1].cmd],
      typeSpeed: 40,
      startDelay: 40,
      onComplete: self => {
        self.destroy()
        
        tmuxEl.current.textContent = terminalData[1].cmd
        terminalData[1].result();
        
        git.start()
      }
    })

    const cd = new Typed(cdEl.current, {
      strings: [terminalData[0].cmd],
      typeSpeed: 40,
      startDelay: 40,
      onComplete: self => {
        self.destroy()
        
        cdEl.current.textContent = terminalData[0].cmd
        terminalData[0].result();

        tmux.start();
      }
    });

    tmux.stop()
    git.stop()
    gitPull.stop()

    return () => {
      cd.destroy()
      tmux.destroy()
      git.destroy()
      gitPull.destroy();
    }
  }, []);

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
      <TerminalTopbar title={termWindowTitle} />

      {/* Main content */}
      <Box h="100%" fontFamily="mono" fontSize="xs" p={2}>
        <Text>{`Last login: ${date.weekdayLong} ${date.month} ${date.weekdayShort} ${date.time} on ttys00${
          Math.floor(Math.random() * 5) + 1
        }`}</Text>
        <TerminalPrompt path="~" display="block"><span ref={cdEl}></span></TerminalPrompt>
        <TerminalPrompt display={cmdIndex >= 1 ? "block" : "none"}><span ref={tmuxEl}></span></TerminalPrompt>
        <TerminalPrompt display={cmdIndex >= 2 ? "block" : "none"}><span ref={gitEl}></span></TerminalPrompt>
        <GitPull display={cmdIndex >= 3 ? "block" : "none"} ref={gitpullEl} />
        <TerminalPrompt display={cmdIndex >= 4 ? "block" : "none"}>code .</TerminalPrompt>
        <TerminalPrompt display={cmdIndex >= 5 ? "block" : "none"}>npm run dev</TerminalPrompt>
      </Box>

      {isTmuxActive && <TmuxStatusline ip={ip} />
}    </TerminalWindow>
  )
}

export default Terminal
