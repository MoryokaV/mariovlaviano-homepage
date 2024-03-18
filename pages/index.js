import {
  Box,
  Text,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  SimpleGrid,
  OrderedList
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
import { SkillIcon, SkillTitle } from '@/components/skill'

import profile_pic from '../public/images/mario.jpg'
import thumbnail1 from '../public/images/macbook_coffee.JPG'
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
              as={NextImage}
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="110px"
              display="inline-block"
              borderRadius="full"
              src={profile_pic}
              alt="Profile picture"
              loading="eager"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I&apos;m a software developer based in{' '}
            <Link
              as={NextLink}
              href="https://ro.wikipedia.org/wiki/Br%C4%83ila"
              passHref
              target="_blank"
            >
              Brăila, Romania
            </Link>
            , with a passion for learning new technologies. All of my projects
            are built from the ground up, from planning and designing all the
            way to solving real-life problems with code. When not in front of my
            desk, I like to spend time outside around cars. Currently, I&apos;
            living of helping small local businesses scale up by improving their
            marketing and productivity stategies using the latest digital
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
            Technical skills
          </Heading>
          <OrderedList>
            <ListItem mb={4} fontWeight="bold">
              <SkillTitle>
                Cross-platform mobile development{' '}
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg" />
              </SkillTitle>
              <Paragraph>
                3+ years experience with developing mobile apps with Flutter
                from scratch. Production-ready code with apps published on
                Google Play and App Store
              </Paragraph>
            </ListItem>
            <ListItem mb={4} fontWeight="bold">
              <SkillTitle>
                Full-stack web development{' '}
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              </SkillTitle>
              <Paragraph>
                Created custom landing pages for small local businesses and
                events. Build, style and deploy static websites according to
                brand identity and business needs.
              </Paragraph>

              <Box display="flex" gap={2} my={2}>
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              </Box>
              <Paragraph>
                Build custom modern admin pages to manage databases for mobile
                apps. Scalable REST APIs with Express.js or Flask that perform
                well even on high traffic.
              </Paragraph>
              <Box display="flex" gap={2} my={2}>
                <SkillIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  invertOnDark={true}
                />
                <SkillIcon
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
                  invertOnDark={true}
                />
              </Box>
            </ListItem>
            <ListItem fontWeight="bold">
              <SkillTitle>
                NoSQL Databases{' '}
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
              </SkillTitle>
              <Paragraph>
                Using non-relational databases to build fast while maintaining
                stability.
              </Paragraph>
            </ListItem>
          </OrderedList>
        </Section>

        <Section delay={0.3}>
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
            , a mobile development course for students meant to spark interest
            in programming.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Organized the first hackathon in my home town
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Released{' '}
            <Link as={NextLink} href="/projects/visitbraila">
              Visit Brăila
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>present</BioYear>
            Looking for new contracts
          </BioSection>
        </Section>

        <Section delay={0.4}>
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

        <Section delay={0.5}>
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

        <Section delay={0.6}>
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
