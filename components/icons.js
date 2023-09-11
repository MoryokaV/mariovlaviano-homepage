import { chakra, Box, shouldForwardProp } from '@chakra-ui/react'

export const ArrowRight = chakra(Box, {
  shouldForwardProp: prop => shouldForwardProp(prop),
  baseStyle: {
    width: 0,
    height: '100%',
    borderTop: '10px solid transparent',
    borderLeft: '10px solid black',
    borderBottom: '10px solid transparent',
    bg: 'transparent'
  }
})

export const OutlineArrowRight = chakra(Box, {
  shouldForwardProp: prop => shouldForwardProp(prop),
  baseStyle: {
    width: '11px',
    height: '11px',
    borderTop: '1px solid gray',
    borderRight: '1px solid gray',
    transform: 'rotate(45deg) translateY(60%)'
  }
})

export const ArrowLeft = chakra(Box, {
  shouldForwardProp: prop => shouldForwardProp(prop),
  baseStyle: {
    width: 0,
    height: '100%',
    borderTop: '10px solid transparent',
    borderRight: '10px solid black',
    borderBottom: '10px solid transparent',
    bg: 'transparent'
  }
})
