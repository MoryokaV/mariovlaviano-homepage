import Layout from '@/components/layouts/article'
import { Container, Box, SimpleGrid, VStack, Text } from '@chakra-ui/react'
import {
  PostTitle,
  PostHeader,
  PostImage,
  PostButtons,
  PostParagraph
} from '@/components/post'
import Fancybox from '@/libs/fancybox'

import bts1 from '../../public/images/posts/bts/bts1.jpg'
import bts2 from '../../public/images/posts/bts/bts2.jpg'
import bts3 from '../../public/images/posts/bts/bts3.jpg'
import bts4 from '../../public/images/posts/bts/bts4.jpg'
import bts5 from '../../public/images/posts/bts/bts5.jpg'
import bts6 from '../../public/images/posts/bts/bts6.jpg'

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
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
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
