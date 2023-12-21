import Layout from '@/components/layouts/article'
import {
  PostHeader,
  PostParagraph,
  PostTitle,
  PostImage,
  PostButtons
} from '@/components/post'
import Fancybox from '@/libs/fancybox'
import { Container, Box, VStack, SimpleGrid, Text } from '@chakra-ui/react'

import maraton1 from '../../public/images/posts/maraton/maraton2.JPG'
import maraton2 from '../../public/images/posts/maraton/maraton1.JPG'
import maraton3 from '../../public/images/posts/maraton/maraton3.JPG'
import maraton4 from '../../public/images/posts/maraton/maraton4.JPG'
import maraton5 from '../../public/images/posts/maraton/maraton5.JPG'
import maraton6 from '../../public/images/posts/maraton/maraton.JPG'

const Post = () => {
  return (
    <Layout title="Maratonul pentru educație antreprenorială">
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
            <PostHeader date="12 iunie, 2023"></PostHeader>
            <PostParagraph>
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
            </PostParagraph>
          </Box>
          <Fancybox>
            <VStack gap={1}>
              <SimpleGrid columns={[2]} gap={1} w="full">
                <PostImage
                  src={maraton1}
                  alt="Maratonul pentru educatie antreprenoriala
                "
                />
                <PostImage
                  src={maraton2}
                  alt="Maratonul pentru educatie antreprenoriala"
                />
              </SimpleGrid>
              <SimpleGrid columns={[3]} gap={1} w="full">
                <PostImage
                  src={maraton4}
                  alt="Maratonul pentru educatie antreprenoriala"
                />
                <PostImage src={maraton3} alt="Visit Braila" />
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
                    src={maraton5}
                    alt="Maratonul pentru educatie antreprenoriala"
                    brightness="40%"
                  />
                </Box>
              </SimpleGrid>
            </VStack>
            <PostImage
              src={maraton6}
              alt="Maratonul pentru educatie antreprenoriala"
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
