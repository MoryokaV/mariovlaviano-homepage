import Layout from '@/components/layouts/article'
import { Box, Container, SimpleGrid, VStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
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
              <em>FlutterLab</em> a fost primul curs de dezvoltare de aplicații
              de mobil făcut vreodată în Brăila. S-a bazat pe învățarea
              framework-ului{' '}
              <Link href="https://flutter.dev" target="_blank" as={NextLink}>
                Flutter
              </Link>{' '}
              cu care poți crea aplicații atât pentru Android cât și pentru iOS
              cu un singur cod sursă. Scopul principal a fost stârnirea
              interesului pentru programare, mai mult decât învățarea
              propriu-zisă a unui limbaj sau utilizarea unor instrumente. Ajutat
              de încă 3 colegi de liceu, am susținut acest curs de-a lungul a 3
              luni, debutând cu un număr de 60 de cursanți. Spațiul pentru
              desfășurarea orelor a fost pus la dispoziție de către{' '}
              <em>Biblioteca Județeană &quot;Panait Istrati&quot;</em>.
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
