import { Box } from '@chakra-ui/react'
import { useRef } from 'react'

export const Parallax = ({ children }) => {
  const termRef = useRef(null)

  const mouseMoveHandler = e => {
    const rect = termRef.current.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    console.log(rect)
    console.log('x: ' + mouseX, 'y: ' + mouseY)

    const ph = (mouseY / rect.height) * 100
    console.log('ph%: ' + ph)

    const rotateX = -16 + (ph / 100) * 32
    console.log(rotateX)

    const pw = (mouseX / rect.width) * 100
    console.log('pw%: ' + pw)

    const rotateY = -16 + (pw / 100) * 32
    console.log(rotateY)

    termRef.current.style = `transform: rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`
  }

  const mouseLeaveHandler = () => {
    termRef.current.style = 'transform: none'
  }

  return (
    <Box ref={termRef} onMouseMove={mouseMoveHandler} onMouseLeave={mouseLeaveHandler}>
      {children}
    </Box>
  )
}
