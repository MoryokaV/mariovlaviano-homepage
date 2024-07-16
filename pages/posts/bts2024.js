import Layout from '@/components/layouts/article'
import {
  Container,
  Link,
  Box,
  SimpleGrid,
  VStack,
  Text
} from '@chakra-ui/react'
import {
  PostTitle,
  PostHeader,
  PostImage,
  PostButtons,
  PostParagraph
} from '@/components/post'
import Fancybox from '@/libs/fancybox'
import NextLink from 'next/link'

import bts1 from '../../public/images/posts/bts2024/bts1.JPG'
import bts2 from '../../public/images/posts/bts2024/bts2.JPG'
import bts3 from '../../public/images/posts/bts2024/bts3.JPG'
import bts4 from '../../public/images/posts/bts2024/bts4.JPG'
import bts5 from '../../public/images/posts/bts2024/bts5.JPG'
import bts6 from '../../public/images/posts/bts2024/bts6.jpg'

const Post = () => {
  return (
    <Layout title="Brăila Tech Sprint 2024">
      <Container px="0">
        <PostTitle />

        <Box
          borderRadius="md"
          backgroundColor="postBg"
          borderColor="terminalBorder"
          borderWidth="1px"
          mb={6}
        >
          <Box p={4}>
            <PostHeader date="24 februarie, 2024"></PostHeader>
            <PostParagraph>
              Brăila Tech Sprint 2024 reprezintă a doua ediție a unui maraton de
              programare dedicat elevilor din regiunea de sud-est a țării pentru
              a-și dovedi aptitudinile tehnice, creative, antreprenoriale,
              sociale, oratorii etc.
            </PostParagraph>
            <PostParagraph>
              Echipa de organizare a muncit 2 luni ca să atragă în concurs 30 de
              participanți, 4 jurați și 23 de sponsori. Astfel, am reușit să
              demonstrăm că există suficient sprijin din partea antreprenorilor,
              instituțiilor și organizațiilor locale pentru ca orice idee să
              devină realitate, este nevoie doar de câteva persoane care să se
              dedice intru totul implementării acesteia.
            </PostParagraph>
            <PostParagraph>
              Website-ul oficial al competiției se poate acesa la:{' '}
              <Link
                as={NextLink}
                href="https://hackathon.bjbraila.ro/"
                target="_blank"
              >
                https://hackathon.bjbraila.ro/
              </Link>
            </PostParagraph>
          </Box>

          <Fancybox>
            <VStack gap={1}>
              <SimpleGrid columns={[2]} gap={1} w="full">
                <PostImage src={bts1} alt="Braila Tech Sprint 2024" />
                <PostImage src={bts2} alt="Braila Tech Sprint 2024" />
              </SimpleGrid>
              <SimpleGrid columns={[3]} gap={1} w="full">
                <PostImage src={bts4} alt="Braila Tech Sprint 2024" />
                <PostImage src={bts3} alt="Braila Tech Sprint 2024" />
                <Box position="relative">
                  <Text
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontSize="4xl"
                    fontWeight="bold"
                    zIndex={2}
                    pointerEvents="none"
                    color="white"
                  >
                    +1
                  </Text>
                  <PostImage
                    src={bts5}
                    alt="Braila Tech Sprint 2024"
                    brightness="40%"
                  />
                </Box>
              </SimpleGrid>
            </VStack>
            <PostImage
              src={bts6}
              alt="Braila Tech Sprint 2024"
              display="none"
            />
          </Fancybox>
          <PostButtons />
        </Box>
      </Container>
    </Layout>
  )
}

export default Post
