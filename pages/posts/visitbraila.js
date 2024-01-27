import {
  Box,
  Container,
  VStack,
  Text,
  SimpleGrid,
  Link
} from '@chakra-ui/react'
import {
  PostButtons,
  PostHeader,
  PostImage,
  PostParagraph,
  PostTitle
} from '@/components/post'
import Layout from '../../components/layouts/article'
import Fancybox from '@/libs/fancybox'
import NextLink from 'next/link'

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
            <PostParagraph>
              Pe parcursul a unui an și jumătate, am lucrat în parteneriat cu{' '}
              <em>Primăria Municipiului Brăila</em> și{' '}
              <em>Biblioteca Județeană &quot;Panait Istrati&quot;</em> la o
              platformă de turism care să curpindă esența călătoriilor în orașul
              nostru.{' '}
              <Link target="_blank" as={NextLink} href="/projects/visitbraila">
                Visit Brăila
              </Link>{' '}
              este aplicația oficială a municipiului Brăila, disponibilă pe{' '}
              <Link
                target="_blank"
                as={NextLink}
                href="https://play.google.com/store/apps/details?id=com.vmasoftware.visit_braila"
              >
                Google Play
              </Link>{' '}
              și{' '}
              <Link
                target="_blank"
                as={NextLink}
                href="https://apps.apple.com/ro/app/visit-br%C4%83ila/id6448944001"
              >
                AppStore
              </Link>
              . Veți descoperi atracții, hoteluri, restaurante, dar în același
              timp, puteți lua pulsul evenimentelor și divertismentului local,
              concerte live, festivaluri, expoziții tradiționale și culinare.
            </PostParagraph>
            <PostParagraph>
              Lansarea oficială a aplicației a avut loc pe data de 28 noiembrie,
              2023, în cadrul conferinței <em>ITforEnergy</em> organizată de{' '}
              <Link
                target="_blank"
                as={NextLink}
                href="https://www.facebook.com/conafromania"
              >
                CONAF Romnânia
              </Link>
              . Tema evenimentului a fost digitalizarea, iar în sală au fost
              prezenți consilieri și secretari de stat ai ministerelor de
              specialiate.
            </PostParagraph>
            <PostParagraph>
              Feedback-ul primit în urma publicării a fost unul foarte bun, mult
              peste așteptările noastre. Am avut parte de numeroase reacții din
              partea antreprenorilor locali, ce și-au dorit promovarea
              afacerilor lor pe <em>Visit Brăila</em>.
            </PostParagraph>
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
            <PostImage src={ziar} alt="Visit Braila" display="none" />
            <PostImage src={alma2} alt="Visit Braila" display="none" />
          </Fancybox>
          <PostButtons />
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
            <PostParagraph>
              În seara zilei de 28 noiembrie, după lansarea proiectului{' '}
              <em>Visit Brăila</em>, am fost speaker in cadrul Galei Excelenței
              în Leadership a{' '}
              <Link
                as={NextLink}
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100069513885487"
              >
                CONAF Brăila
              </Link>
              . Am vorbit despre &quot;Cum e sa faci lucruri în Brăila, în
              comunitățile mici și ce au ele diferit față de celelalte&quot;.
            </PostParagraph>
          </Box>
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/Rgm_6V8ux1U?si=F1dBcpuYXYnETJ8v"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowfullscreen
          ></iframe>
          <PostButtons />
        </Box>
      </Container>
    </Layout>
  )
}

export default Post
