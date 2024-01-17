import Layout from '@/components/layouts/article'
import {
  PostHeader,
  PostParagraph,
  PostTitle,
  PostImage,
  PostButtons
} from '@/components/post'
import Fancybox from '@/libs/fancybox'
import {
  Container,
  Box,
  VStack,
  SimpleGrid,
  Text,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'

import maraton1 from '../../public/images/posts/maraton/maraton3.JPG'
import maraton2 from '../../public/images/posts/maraton/maraton2.JPG'
import maraton3 from '../../public/images/posts/maraton/maraton4.JPG'
import maraton4 from '../../public/images/posts/maraton/maraton5.JPG'
import maraton5 from '../../public/images/posts/maraton/maraton6.JPG'
import maraton6 from '../../public/images/posts/maraton/maraton1.JPG'

import licee1 from '../../public/images/posts/maraton/licee1.JPG'
import licee2 from '../../public/images/posts/maraton/licee2.JPG'
import licee3 from '../../public/images/posts/maraton/licee3.JPG'
import licee4 from '../../public/images/posts/maraton/licee4.JPG'

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
              <em>Maratonul pentru Educație Antreprenorială</em> este un proiect
              cu impact național pentru susținerea educației, inițiativei
              antreprenoriale, digitalizării și dezvoltării durabile.{' '}
              <Link
                href="https://www.facebook.com/conafromania"
                target="_blank"
                as={NextLink}
              >
                CONAF România
              </Link>{' '}
              susține acest proiect la inițiativa sucursalei{' '}
              <Link
                href="https://www.facebook.com/profile.php?id=100069513885487"
                target="_blank"
                as={NextLink}
              >
                CONAF Brăila
              </Link>{' '}
              ce a organizat prima etapă județeană în urma unei prezentări prin
              liceele de top din oraș.
            </PostParagraph>
            <PostParagraph>
              În concurs, am reprezentat echipa <em>City Break</em> cu{' '}
              <Link href="/projects/citybreak" target="_blank" as={NextLink}>
                proiectul
              </Link>{' '}
              ce poartă același nume. Etapa județeană a fost pentru noi un
              prilej de învățare, de conștientizare a unor lipsuri pe care
              proiectul nostru le avea, soldându-se cu o clasare pe locul 3 și o
              calificare in urmatoarea etapă.
            </PostParagraph>
            <PostParagraph>
              Teatrul Nottara, București, este locul în care etapa națională a
              avut loc. Confruntarea a fost dată intre cele mai bune 3 echipe
              din 12 județe. <b>Am câștigat</b> premiul cel mare, impunându-ne
              printr-un discurs bine structurat și un proiect matur.
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
        <Box
          borderRadius="md"
          backgroundColor="postBg"
          borderColor="terminalBorder"
          borderWidth="1px"
          mb={6}
        >
          <Box p={4}>
            <PostHeader date="10 noiembrie, 2023"></PostHeader>
            <PostParagraph>
              Pe parcursul lunii noiembrie, am luat parte, în rolul de speaker,
              la orele de educație antreprenorială pentru cea de-a doua ediție a{' '}
              <em>Maratonulului pentru Educație Antreprenorială</em>. Am fost
              întâmpinați de elevi foarte bine pregătiți, informați si
              nerăbdători, ceea ce este o confirmare a succesului de care
              concursul are parte. Mi-am împărtășit experiența în acest concurs,
              încercand, totodata, într-un mod interactiv, să ofer câteva
              tips&tricks pe care le-am aflat cu greu, experimentând.
            </PostParagraph>
          </Box>
          <Fancybox>
            <VStack gap={1}>
              <SimpleGrid columns={[1]} gap={1} w="full">
                <PostImage
                  src={licee3}
                  alt="Maratonul pentru educatie antreprenoriala
                "
                />
              </SimpleGrid>
              <SimpleGrid columns={[3]} gap={1} w="full">
                <PostImage
                  src={licee1}
                  alt="Maratonul pentru educatie antreprenoriala"
                />
                <PostImage
                  src={licee2}
                  alt="Maratonul pentru educatie antreprenoriala"
                />
                <PostImage src={licee4} alt="Visit Braila" />
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
