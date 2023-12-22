import Layout from '@/components/layouts/article'
import { Container, Box, VStack, SimpleGrid } from '@chakra-ui/react'
import {
  PostTitle,
  PostImage,
  PostButtons,
  PostHeader,
  PostParagraph
} from '@/components/post'
import Fancybox from '@/libs/fancybox'

import antena1 from '../../public/images/posts/antena3/antena3_1.JPG'
import antena2 from '../../public/images/posts/antena3/antena3_2.JPG'
import antena3 from '../../public/images/posts/antena3/antena3_3.JPG'
import antena4 from '../../public/images/posts/antena3/antena3_4.JPG'

const Post = () => {
  return (
    <Layout title="Antena 3 CNN">
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
            <PostHeader date="15 iulie, 2023" />
            <PostParagraph>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </PostParagraph>
          </Box>
          <Fancybox>
            <VStack gap={1}>
              <Box w="full">
                <PostImage src={antena4} alt="Antena 3 CNN" />
              </Box>
              <SimpleGrid columns={[3]} gap={1} w="full">
                <PostImage src={antena2} alt="Antena 3 CNN" />
                <PostImage src={antena3} alt="Antena 3 CNN" />
                <PostImage src={antena1} alt="Antena 3 CNN" />
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
