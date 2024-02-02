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
        <meta name="author" content="Mario Vlaviano" />
        <meta
          name="description"
          content="Mario Vlaviano is a software developer based in Romania with a passion for learning new technologies."
        />

        <meta property="og:site_name" content="Mario Vlaviano" />
        <meta name="og:title" content="Mario Vlaviano" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mariovlaviano.ro/og-logo.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
