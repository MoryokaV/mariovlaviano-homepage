import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Hero from '../hero'
import Navbar from '../navbar'
import Footer from '../footer'
import { Desk } from '../desk'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={6} minH="100vh" display="flex" flexDirection="column">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mario Vlaviano - Homepage</title>
      </Head>

      <Navbar path={router.route} />
      <Container
        maxW={router.route !== '/tools' ? 'container.md' : '750px'}
        pt={14}
      >
        {router.route !== '/tools' ? <Hero /> : <Desk />}
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Main
