import { Box, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
// import NextImage from 'next/image'

// import lightDesk from '../public/images/desk-light.jpg'
// import darkDesk from '../public/images/desk-dark.jpg'

export const Desk = () => {
  return (
    <Box
      h={[250, 300, 390]}
      maxH="50%"
      overflow="hidden"
      position="relative"
      mt={2}
      mb={4}
      boxShadow={`0 0 8px 8px ${useColorModeValue('#f0e7db', '#1a1a1f')} inset`}
      bgImage={`url('/images/desk-${useColorModeValue('light', 'dark')}.jpg')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Head>
        <link rel="preload" href="/images/desk-light.jpg" as="image" />
        <link rel="preload" href="/images/desk-dark.jpg" as="image" />
      </Head>
      {/* <NextImage */}
      {/*   src={useColorModeValue(lightDesk, darkDesk)} */}
      {/*   style={{ zIndex: -1, objectFit: 'cover', overflow: 'hidden' }} */}
      {/*   sizes="(max-width: 768px) 100vw, 768px" */}
      {/*   priority={true} */}
      {/*   fill={true} */}
      {/*   loading="eager" */}
      {/*   alt="mario's desk hero image" */}
      {/* /> */}
    </Box>
  )
}
