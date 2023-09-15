import { Box } from '@chakra-ui/react'
import { useRef } from 'react'

export const Parallax = ({children}) => {
  const termRef = useRef(null)

  const mouseMoveHandler = (e) => {
    const rect = termRef.current.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    console.log(rect)
    console.log("x: " + mouseX, "y: " + mouseY)

    const ph = mouseY / rect.height * 100
    console.log("ph%: " + ph)

    const rotateY = -10 + (ph / 100 * 20) 
    console.log(rotateY)

    const pw = mouseX / rect.width * 100
    console.log("pw%: " + pw)

    const rotateX = -10 + (pw / 100 * 20) 
    console.log(rotateX)

    termRef.current.style = `transform: rotateY(${rotateX}deg) rotateX(${-rotateY}deg)`
  } 

  const mouseLeaveHandler = () => {
    termRef.current.style = "transform: none"
  }

  return (
    <Box 
      ref={termRef}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
    </Box>
  )
}
