import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={ useColorModeValue("whiteAlpha.500", "whiteAlpha.200") } p={3} mb={6} align="center">
        Hello, I&apos;m an indie app developer based in Romania!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mario Vlaviano
          </Heading>
          <p>Software architect (Developer / Computers craftsman / Automotive enthusiast)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
