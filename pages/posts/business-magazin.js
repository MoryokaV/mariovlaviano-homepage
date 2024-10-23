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

import bm1 from '../../public/images/posts/businessmagazin.jpeg'

const Post = () => {
  return (
    <Layout title="Business Magazin">
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
              Despre cum poate contribui tehnologia la dezvoltarea economică a
              orașelor mici, am avut ocazia de a scrie o opinie pentru revista
              Business Magazin
              <br />
              <br />
              <Link
                target="_blank"
                as={NextLink}
                href="https://www.businessmagazin.ro/opinii/mario-vlaviano-dezvoltator-software-tehnologia-poate-contribui-la-22492800"
              >
                https://www.businessmagazin.ro/opinii/mario-vlaviano-dezvoltator-software-tehnologia-poate-contribui-la-22492800
              </Link>{' '}
            </PostParagraph>
          </Box>
          <Fancybox>
            <VStack gap={1}>
              <Box w="full">
                <a data-fancybox="post-gallery" href={bm1.src}>
                  <NextImage
                    src={bm1}
                    alt={'Business Magazin'}
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
