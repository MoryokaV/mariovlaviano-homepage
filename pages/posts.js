import Layout from '@/components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '@/components/section'
import { PostGridItem } from '@/components/grid-item'

import thumbVisitBraila from '../public/images/posts/visitbraila.jpg'
import thumbMaraton from '../public/images/posts/maraton.jpg'
import thumbBTS from '../public/images/posts/bts.jpg'
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
              title="Brăila Tech Sprint 2023"
              thumbnail={thumbBTS}
              alt="BrailaTechSprint"
              id="bts"
            >
              Organizarea primului hackathon din Brăila
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
