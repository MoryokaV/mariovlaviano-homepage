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

import bts1 from '../../public/images/posts/bts2023/bts1.jpg'
import bts2 from '../../public/images/posts/bts2023/bts2.jpg'
import bts3 from '../../public/images/posts/bts2023/bts3.jpg'
import bts4 from '../../public/images/posts/bts2023/bts4.jpg'
import bts5 from '../../public/images/posts/bts2023/bts5.jpg'
import bts6 from '../../public/images/posts/bts2023/bts6.jpg'

const Post = () => {
  return (
    <Layout title="Brăila Tech Sprint 2023">
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
            <PostHeader date="8 aprilie, 2023"></PostHeader>
            <PostParagraph>
              BrăilaTechSprint este un hackathon de 24h dedicat elevilor de
              liceu de toate vârstele, ce are loc la Brăila. Alături de
              conducerea bibliotecii județene &quot;Panait Istrati&quot; și
              sprijinul Consiliului Județean Brăila, am inițiat acest concurs la
              început de 2023, ușor sceptic în ceea ce privea numărul
              participanților. Prima ediție a BTS a fost un real succces, așa că
              pentru 2024 lucrăm la o ediție regională, în care invităm județele
              vecine să ia parte în concurs. În calitate de jurat, am analizat
              10 proiecte ambițioase dezvoltate pe parcursul unei singure zile,
              vizand domenii diferite: sănătate, nutriție, comerț, educație etc.
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
                <PostImage src={bts1} alt="Braila Tech Sprint 2023" />
                <PostImage src={bts2} alt="Braila Tech Sprint 2023" />
              </SimpleGrid>
              <SimpleGrid columns={[3]} gap={1} w="full">
                <PostImage src={bts4} alt="Braila Tech Sprint 2023" />
                <PostImage src={bts3} alt="Braila Tech Sprint 2023" />
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
                    alt="Braila Tech Sprint 2023"
                    brightness="40%"
                  />
                </Box>
              </SimpleGrid>
            </VStack>
            <PostImage
              src={bts6}
              alt="Braila Tech Sprint 2023"
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
