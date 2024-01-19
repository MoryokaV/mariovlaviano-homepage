import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import {
  Box,
  Heading,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'

const Tools = () => {
  return (
    <Layout>
      <Paragraph>
        This desk, is the place where I spent most of my time working every day.
        I designed this space having productivity and good looks in mind, being
        situated in the living room. I can&apos;t say for certain that there
        will ever be a final version of my desk setup, because I always try to
        make it more clean and modern as time passes. This is a list with a part
        of the tools that help me achieve my goals that may inspire your future
        investments for your own setup.
      </Paragraph>
      <SimpleGrid columns={[1, 2]} py={6} gap={8}>
        <Box>
          <Heading mb={3} as="h2" size="lg">
            Computers
          </Heading>
          <hr />
          <UnorderedList mt={3}>
            <ListItem>MacBook Air M1, late 2020</ListItem>
            <ListItem>Lenovo ThinkPad X1 Carbon Gen 7</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading mb={3} as="h2" size="lg">
            Peripherals
          </Heading>
          <hr />
          <UnorderedList mt={3}>
            <ListItem>4k 27&quot; LG USB-C Monitor</ListItem>
            <ListItem>Keychron K2 V2</ListItem>
            <ListItem>Apple Magic Keyboard</ListItem>
            <ListItem>Logitech MX Anywhere 2</ListItem>
            <ListItem>Apple Airpods 3</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading mb={3} as="h2" size="lg">
            Accessories
          </Heading>
          <hr />
          <UnorderedList mt={3}>
            <ListItem>Keychron keyboard wood palmrest</ListItem>
            <ListItem>Bestand T1 Station</ListItem>
            <ListItem>Xiaomi Monitor Lamp</ListItem>
            <ListItem>UGREEN USB-C adapter</ListItem>
            <ListItem>SoundCore Motion+ speaker</ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>
    </Layout>
  )
}

export default Tools
