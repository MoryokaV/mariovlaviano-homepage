import { Box } from '@chakra-ui/react'
import { useRef } from 'react'

export const Parallax = ({ children }) => {
  const termRef = useRef(null)

  const mouseMoveHandler = e => {
    const rect = termRef.current.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const ph = (mouseY / rect.height) * 100

    const rotateX = -16 + (ph / 100) * 32

    const pw = (mouseX / rect.width) * 100

    const rotateY = -16 + (pw / 100) * 32

    termRef.current.style = `transform: rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`
  }

  const mouseLeaveHandler = () => {
    termRef.current.style = 'transition: all 0.4s linear 0s; transform: rotateY(0deg) rotateX(0deg)'
  }

  return (
    <Box css={{ overflow: 'visible', perspective: '160rem' }}>
      <Box
        ref={termRef}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
        css={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </Box>
    </Box>
  )
}
