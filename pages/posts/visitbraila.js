import {
  Box,
  Container,
  HStack,
  Image,
  VStack,
  Text,
  SimpleGrid,
  Stack,
  Center
} from '@chakra-ui/react'
import { PostImage, PostTitle } from '@/components/post'
import Layout from '../../components/layouts/article'
import Paragraph from '@/components/paragraph'
import { TimeIcon } from '@chakra-ui/icons'
import Fancybox from '@/libs/fancybox'

import alma1 from 'public/images/posts/visitbraila/visitbraila1.jpg'
import alma2 from 'public/images/posts/visitbraila/visitbraila3.jpg'
import teatru1 from 'public/images/posts/visitbraila/visitbraila4.jpg'
import teatru2 from 'public/images/posts/visitbraila/visitbraila2.jpg'
import statie from 'public/images/posts/visitbraila/visitbraila5.jpg'
import qr from 'public/images/posts/visitbraila/visitbraila6.jpg'
import ziar from 'public/images/posts/visitbraila/visitbraila7.jpg'

const Post = () => {
  return (
    <Layout title="Visit Brăila">
      <Container>
        <PostTitle />
        <Box borderRadius="md" backgroundColor="#27272b" mb={4}>
          <Box p={4}>
            <HStack gap={4} mb={4}>
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="60px"
                display="inline-block"
                borderRadius="full"
                src="/images/mario.jpg"
                alt="Profile picture"
              />
              <VStack align="start" gap={0}>
                <Text fontWeight="700" fontSize="lg">
                  Mario Vlaviano
                </Text>
                <HStack opacity="50%" fontSize="md">
                  <Text>28 noiembrie, 2023</Text>
                  <TimeIcon />
                </HStack>
              </VStack>
            </HStack>
            <Paragraph>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </Paragraph>
          </Box>
          <Fancybox>
            <VStack gap={1}>
              <SimpleGrid columns={[2]} gap={1} w="full">
                <PostImage src={alma1} alt="Visti Braila" />
                <PostImage src={teatru2} alt="Visit Braila" />
              </SimpleGrid>
              <SimpleGrid columns={[3]} gap={1} w="full">
                <PostImage src={teatru1} alt="Visit Braila" />
                <PostImage src={statie} alt="Visit Braila" />
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
                  >
                    +3
                  </Text>
                  <PostImage src={qr} alt="Visit Braila" opacity="40%" />
                </Box>
              </SimpleGrid>
            </VStack>
            <PostImage src={ziar} alt="Visit Braila" display="none"></PostImage>
            <PostImage
              src={alma2}
              alt="Visit Braila"
              display="none"
            ></PostImage>
          </Fancybox>
        </Box>
      </Container>
    </Layout>
  )
}

export default Post
