import Layout from '@/components/layouts/article'
import { Box, Container, SimpleGrid, VStack } from '@chakra-ui/react'
import {
  PostTitle,
  PostButtons,
  PostHeader,
  PostImage,
  PostParagraph
} from '@/components/post'
import Fancybox from '@/libs/fancybox'

import flutterlab1 from '../../public/images/posts/flutterlab/flutterlab1.JPG'
import flutterlab2 from '../../public/images/posts/flutterlab/flutterlab2.JPG'
import flutterlab3 from '../../public/images/posts/flutterlab/flutterlab3.JPG'
import flutterlab4 from '../../public/images/posts/flutterlab/flutterlab4.JPG'
import flutterlab5 from '../../public/images/posts/flutterlab/flutterlab5.JPG'

const Post = () => {
  return (
    <Layout title="FlutterLab">
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
            <PostHeader date="29 ianuarie, 2022" />
            <PostParagraph>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </PostParagraph>
          </Box>
          <Fancybox>
            <VStack gap={1}>
              <SimpleGrid columns={[2]} gap={1} w="full">
                <PostImage src={flutterlab5} alt="FlutterLab" />
                <PostImage src={flutterlab2} alt="FlutterLab" />
              </SimpleGrid>
              <SimpleGrid columns={[3]} gap={1} w="full">
                <PostImage src={flutterlab1} alt="FlutterLab" />
                <PostImage src={flutterlab3} alt="FlutterLab" />
                <PostImage src={flutterlab4} alt="FlutterLab" />
              </SimpleGrid>
            </VStack>
          </Fancybox>
          <PostButtons />
        </Box>
      </Container>
    </Layout>
  )
}

export default Post
