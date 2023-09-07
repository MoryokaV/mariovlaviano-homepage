import { Box, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

import lightDesk from '../public/images/desk-light.jpg'
import darkDesk from '../public/images/desk-dark.jpg'

const Hero = () => {
  return (
    <Box
      h={[250, 300, 380]}
      maxH="50%"
      overflow="hidden"
      position="relative"
      mb={6}
      boxShadow={`0 0 8px 8px ${useColorModeValue('#f0e7db', '#202023')} inset`}
      /*bgImage={`url('/images/desk3-${useColorModeValue('light', 'dark')}.jpg')`}*/
      /*bgPosition="center"*/
      /*bgRepeat="no-repeat"*/
      /*bgSize="cover"*/
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
}

export default Hero
