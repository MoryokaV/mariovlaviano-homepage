import Layout from '@/components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '@/components/section'
import { PostGridItem } from '@/components/grid-item'

import thumbBTS2024 from '../public/images/posts/bts2024.JPG'
import thumbVisitBraila from '../public/images/posts/visitbraila.jpg'
import thumbMaraton from '../public/images/posts/maraton1.jpg'
import thumbBTS2023 from '../public/images/posts/bts2023.jpg'
import thumbAntena from '../public/images/posts/antena3.jpg'
import thumbFlutterLab from '../public/images/posts/flutterlab.jpg'

const Posts = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular posts
        </Heading>

        <SimpleGrid columns={[1, 2]} gap={6}>
          <Section>
            <PostGridItem
              title="Brăila Tech Sprint 2024"
              thumbnail={thumbBTS2024}
              alt="BrailaTechSprint 2024"
              id="bts2024"
            >
              A doua ediție a hackathonului BTS
            </PostGridItem>
          </Section>
          <Section>
            <PostGridItem
              title="Visit Brăila"
              thumbnail={thumbVisitBraila}
              alt="Visit Braila in newspaper"
              id="visitbraila"
            >
              Lansarea aplicației oficiale a orașului
            </PostGridItem>
          </Section>
          <Section>
            <PostGridItem
              title="Maratonul pentru educație antreprenorială"
              thumbnail={thumbMaraton}
              alt="Maratonul pentru educatie antreprenoriala"
              id="maraton"
            >
              Câștigătorul etapei naționale
            </PostGridItem>
          </Section>
          <Section delay={0.1}>
            <PostGridItem
              title="Antena 3 CNN"
              thumbnail={thumbAntena}
              alt="Antena 3"
              id="antena3"
            >
              Invitat la emisiunea Income Magazine
            </PostGridItem>
          </Section>
          <Section delay={0.1}>
            <PostGridItem
              title="Brăila Tech Sprint 2023"
              thumbnail={thumbBTS2023}
              alt="BrailaTechSprint 2023"
              id="bts2023"
            >
              Organizarea primului hackathon din Brăila
            </PostGridItem>
          </Section>
          <Section delay={0.2}>
            <PostGridItem
              title="FlutterLab"
              thumbnail={thumbFlutterLab}
              alt="FlutterLab"
              id="flutterlab"
            >
              Lector și inițiator al unui curs de Flutter
            </PostGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
