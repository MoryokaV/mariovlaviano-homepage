import { ProjectGridItem } from '@/components/grid-item'
import Section from '@/components/section'
import Layout from '../components/layouts/article'
import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'

import thumbVisitBraila from '../public/images/projects/visitbraila_01.png'
import thumbCityBreak from '../public/images/projects/citybreak_01.jpg'
import thumbBTS from '../public/images/projects/bts_01.jpg'
import thumbUpscale from '../public/images/projects/upscale_01.png'
import thumbBarberEF from '../public/images/projects/barberef_01.jpg'
import thumbCoffetea from '../public/images/projects/coffetea_01.png'
import thumbOrpra from '../public/images/projects/orpra_01.png'
import thumbIonut from '../public/images/projects/ionut_01.png'
import thumbStar from '../public/images/projects/starpg_01.png'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Mobile Apps
        </Heading>
        <SimpleGrid columns={[1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="visitbraila"
              title="Visit Brăila"
              thumbnail={thumbVisitBraila}
            >
              My home town cross-platform mobile app made for citizens and
              tourists
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="citybreak"
              title="City Break"
              thumbnail={thumbCityBreak}
            >
              A fork of Visit Braila, but targeting all cities of Romania
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Web
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem id="orpra" title="ORPRA.AI" thumbnail={thumbOrpra}>
              AI startup that automates repetitive processes
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem
              id="coffetea"
              title="COFFETEA"
              thumbnail={thumbCoffetea}
            >
              Coffee Shop website
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="ionutconstantin"
              title="ionutconstantin.ro"
              thumbnail={thumbIonut}
            >
              Freelancer videographer
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem id="starpg" title="Star P&G" thumbnail={thumbStar}>
              Constructions company
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="upscale-consulting"
              title="Upscale Smart Consulting"
              thumbnail={thumbUpscale}
            >
              Presentation website for a non-reimbursable funds consultancy firm
            </ProjectGridItem>
          </Section>
          <Section delay={0.5}>
            <ProjectGridItem
              id="bts"
              title="Brăila Tech Sprint"
              thumbnail={thumbBTS}
            >
              Official website of the eastern Romania hackathon
            </ProjectGridItem>
          </Section>
          <Section delay={0.5}>
            <ProjectGridItem
              id="barberef"
              title="Freestyle Barber EF"
              thumbnail={thumbBarberEF}
            >
              Local man&women barber shop landing page
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
