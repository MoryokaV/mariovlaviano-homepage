import { Box, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

import lightDesk from '../public/images/desk-light.jpg'
import darkDesk from '../public/images/desk-dark.jpg'

const StyledImage = styled(Image)`
  position: relative;
  z-index: -1;
`

const Hero = () => {
  return (
    <Box
      w="100%"
      h="400px"
      maxH="50%"
      overflow="hidden"
      mb={6}
      boxShadow={`0 0 8px 8px ${useColorModeValue('#f0e7db', '#202023')} inset`}
      /*bgImage={`url('/images/desk3-${useColorModeValue('light', 'dark')}.jpg')`}*/
      /*bgPosition="center"*/
      /*bgRepeat="no-repeat"*/
      /*bgSize="cover"*/
      borderRadius="28px"
    >
      <StyledImage
        src={useColorModeValue(lightDesk, darkDesk)}
        placeholder="blur"
        priority={true}
        alt="mario's desk hero image"
      />
    </Box>
  )
}

export default Hero
