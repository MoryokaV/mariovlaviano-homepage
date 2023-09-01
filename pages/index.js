import { Box, Container, Heading, useColorModeValue, Image, Link } from '@chakra-ui/react'
import Section from '../components/section'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m an indie app developer based in Romania!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mario Vlaviano
          </Heading>
          <p>Software architect (Developer / Computers craftsman / Automotive enthusiast)</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="110px"
            display="inline-block"
            borderRadius="full"
            src="/images/mario 2.jpg"
            alt="Profile picture"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Mario is a software developer based in{' '}
          <Link as={NextLink} href="https://ro.wikipedia.org/wiki/Br%C4%83ila" passHref target="_blank">
            Brăila, Romania
          </Link>
          , with a passion for learning new technologies. All of his projects are built from the ground up, from
          planning and designing all the way to solving real-life problems with code. When not in front of his desk, he
          likes to spend time outside around cars. Currently, he is living of helping small local businesses scale up by
          improving their marketing and productivity stategies using the latest digital solutions in the market.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Born in Brăila, Romania
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started high school studies at "Gheorghe M. Murgoci"
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Created FlutterLab, a mobile development course for students with ages between 12 and 18 meant to spark
          interest in programming.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Organized the first hackathon in my community
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working on personal projects
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Sports cars, Coffee, Biking, Swimming, Art, Music, Public speaking, Entrepreneurship</Paragraph>
      </Section>
    </Container>
  )
}

export default Page
