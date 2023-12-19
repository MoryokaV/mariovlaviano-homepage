import { Box, Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import {
  LikeButton,
  PostHeader,
  PostImage,
  PostTitle,
  ShareButton
} from '@/components/post'
import Layout from '../../components/layouts/article'
import Paragraph from '@/components/paragraph'
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
            <PostHeader date="28 noiembrie, 2023"></PostHeader>
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
                    color="white"
                  >
                    +3
                  </Text>
                  <PostImage src={qr} alt="Visit Braila" brightness="40%" />
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
          <SimpleGrid columns={[2]} p={2}>
            <LikeButton></LikeButton>
            <ShareButton></ShareButton>
          </SimpleGrid>
        </Box>

        <Box
          borderRadius="md"
          backgroundColor="postBg"
          borderColor="terminalBorder"
          borderWidth="1px"
          mb={4}
        >
          <Box p={4}>
            <PostHeader date="28 noiembrie, 2023"></PostHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
            </Paragraph>
          </Box>
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/XpVzETwet1c?si=lc3pOHmMTce1JIJG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowfullscreen
          ></iframe>
          <SimpleGrid columns={[2]} p={2}>
            <LikeButton></LikeButton>
            <ShareButton></ShareButton>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Post
