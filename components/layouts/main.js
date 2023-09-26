import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Hero from '../hero'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={6}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mario Vlaviano - Homepage</title>
      </Head>

      <Navbar path={router.route} />
      <Container maxW="container.md" pt={14}>
        <Hero />
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Main
