import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '@/components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoMail,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

import thumbnail1 from '../public/images/mario 3.jpg'
import thumbnail2 from '../public/images/mario 2.jpg'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m an indie mobile app developer based in Romania!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mario Vlaviano
            </Heading>
            <p>
              Software architect (Developer / Computers craftsman / Automotive
              enthusiast)
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="110px"
              display="inline-block"
              borderRadius="full"
              src="/images/mario.jpg"
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
            <Link
              as={NextLink}
              href="https://ro.wikipedia.org/wiki/Br%C4%83ila"
              passHref
              target="_blank"
            >
              Brăila, Romania
            </Link>
            , with a passion for learning new technologies. All of his projects
            are built from the ground up, from planning and designing all the
            way to solving real-life problems with code. When not in front of
            his desk, he likes to spend time outside around cars. Currently, he
            is living of helping small local businesses scale up by improving
            their marketing and productivity stategies using the latest digital
            solutions in the market.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              scroll={false}
              href="/projects"
            >
              My Portfolio
            </Button>
          </Box>
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
            Started high school studies at &quot;Gheorghe M. Murgoci&quot;
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Created{' '}
            <Link as={NextLink} href="/posts/flutterlab">
              FlutterLab
            </Link>
            , a mobile development course for students with ages between 12 and
            18 meant to spark interest in programming.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Organized the first hackathon in my community
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Released{' '}
            <Link as={NextLink} href="/projects/visitbraila">
              Visit Brăila
            </Link>
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
          <Paragraph>
            Sports cars, Coffee, Art,{' '}
            <Link as={NextLink} href="/posts/maraton">
              Entrepreneurship
            </Link>
            , Biking, Music, Swimming, Public speaking
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link
                as={NextLink}
                href="https://github.com/moryokav"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @moryokav
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                href="https://instagram.com/mario.vlv"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @mario.vlv
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                href="https://facebook.com/mariovlaviano.75"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  Mario Alexandru Vlaviano
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={NextLink}
                href="https://www.linkedin.com/in/mario-alexandru-vlaviano-6b3798289"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Mario Vlaviano
                </Button>
              </Link>
            </ListItem>
          </List>
          <SimpleGrid mt={2} columns={{ sm: 2 }} gap={4}>
            <Image
              as={NextImage}
              src={thumbnail1}
              borderRadius={12}
              fit="cover"
              height="200px"
              alt="mario photo"
            />
            <Image
              as={NextImage}
              src={thumbnail2}
              borderRadius={12}
              fit="cover"
              height="200px"
              alt="mario photo"
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Reach out
          </Heading>
          <Paragraph>
            I am open to freelance work and new opportunities in software
            development.
          </Paragraph>
          <Box align="center" mt={3}>
            <Link as={NextLink} href="mailto:contact@mariovlaviano.ro">
              <Button colorScheme="teal" leftIcon={<Icon as={IoMail} />}>
                Send me an email
              </Button>
            </Link>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
