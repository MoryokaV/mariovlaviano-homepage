import Layout from '@/components/layouts/article'
import { Container, Link, Box, VStack } from '@chakra-ui/react'
import {
  PostTitle,
  PostButtons,
  PostHeader,
  PostParagraph
} from '@/components/post'
import Fancybox from '@/libs/fancybox'
import NextLink from 'next/link'
import NextImage from 'next/image'

import zf1 from '../../public/images/posts/zf.jpeg'

const Post = () => {
  return (
    <Layout title="Ziarul Financiar">
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
              Am avut plăcerea de a răspunde la o serie de întrebări din partea
              Ziarul Financiar despre viața de antreprenor în IT la 19 ani, cu
              provocări, victorii şi câteva proiecții pentru viitor.
              <br />
              <br />
              (Articolul complet este disponibil doar pentru abonații ZF)
              <br />
              <br />
              <Link
                target="_blank"
                as={NextLink}
                href="https://www.zf.ro/business-hi-tech/mario-vlaviano-tanarul-vandut-aplicatia-visit-braila-catre-primaria-22462657"
              >
                https://www.zf.ro/business-hi-tech/mario-vlaviano-tanarul-vandut-aplicatia-visit-braila-catre-primaria-22462657
              </Link>{' '}
            </PostParagraph>
          </Box>
          <Fancybox>
            <VStack gap={1}>
              <Box w="full">
                <a data-fancybox="post-gallery" href={zf1.src}>
                  <NextImage
                    src={zf1}
                    alt={'Ziarul Financiar'}
                    loading="eager"
                    style={{
                      objectFit: 'cover',
                      // height: '580px',
                      width: '100%'
                    }}
                  ></NextImage>
                </a>
              </Box>
            </VStack>
          </Fancybox>
          <PostButtons />
        </Box>
      </Container>
    </Layout>
  )
}

export default Post
