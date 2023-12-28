import Layout from '@/components/layouts/article'
import { Container, Link, Box, VStack, SimpleGrid } from '@chakra-ui/react'
import {
  PostTitle,
  PostImage,
  PostButtons,
  PostHeader,
  PostParagraph
} from '@/components/post'
import Fancybox from '@/libs/fancybox'
import NextLink from 'next/link'

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
              La invitația moderatorului Adrian Măniuțiu, am particiapt la o
              ediție a emisiunii News Magazine pe postul de știri,{' '}
              <Link
                href="https://www.antena3.ro/"
                target="_blank"
                as={NextLink}
              >
                Antena 3 CNN
              </Link>
              . Împreună cu reprezentanți ai CONAF România, am discutat pe
              marginea concursului din 12 iunie. Am prezentat domnului minsitru
              al Econoiei, Antreprenoriatului și Turismului, Ștefan-Radu Oprea,
              și domnului minsitru al Energiei, Sebastian Burduja, proiectul
              meu,{' '}
              <Link as={NextLink} href="/projects/citybreak" target="_blank">
                City Break
              </Link>
              , ce propune o soluție universală de digitalizare a procesului de
              informare din timpul calatoriilor de tip <em>city break</em> în
              România.
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
