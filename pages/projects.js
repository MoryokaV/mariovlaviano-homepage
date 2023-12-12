import { ProjectGridItem } from '@/components/grid-item'
import Section from '@/components/section'
import Layout from '../components/layouts/article'
import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'

import thumbVisitBraila from '../public/images/projects/visitbraila_01.png'
import thumbCityBreak from '../public/images/projects/citybreak_01.jpg'
import thumbCloudStorage from '../public/images/projects/cloudstorage_01.jpg'
import thumbCosmeticsShop from '../public/images/projects/cosmeticsshop_01.jpg'
import thumbBTS from '../public/images/projects/bts_01.jpg'
import thumbEricAutomaster from '../public/images/projects/ericautomaster_01.jpg'
import thumbBarberEF from '../public/images/projects/barberef_01.jpg'
import thumbVelocity from '../public/images/projects/velocity_01.jpg'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
          <Section delay={0.1}>
            <ProjectGridItem
              id="cloudstorage"
              title="Cloud Storage"
              thumbnail={thumbCloudStorage}
            >
              A clone of cloud storage concept. Store, preview and download
              files
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem
              id="cosmeticsshop"
              title="eCommerce App"
              thumbnail={thumbCosmeticsShop}
            >
              Cosmetics shop mobile app clone
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="bts"
              title="Brăila Tech Sprint"
              thumbnail={thumbBTS}
            >
              Official website of the eastern Romania hackathon
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem
              id="ericautomaster"
              title="Eric Automaster"
              thumbnail={thumbEricAutomaster}
            >
              Elite driving school based in Brăila landing page
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="barberef"
              title="Freestyle Barber EF"
              thumbnail={thumbBarberEF}
            >
              Local man&women barber shop landing page
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="velocity"
              title="Velocity Robotics"
              thumbnail={thumbVelocity}
            >
              High school robotics team presentation as a web page
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
