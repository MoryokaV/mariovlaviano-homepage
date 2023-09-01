import { ProjectGridItem } from '@/components/grid-item'
import Section from '@/components/section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import thumbVisitBraila from '../public/images/projects/visitbraila_01.jpg'
import thumbCityBreak from '../public/images/projects/citybreak_01.jpg'

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="visitbraila" title="Visit Brăila" thumbnail={thumbVisitBraila}>
            My city mobile app for citizens and tourists
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="citybreak" title="City Break" thumbnail={thumbCityBreak}>
            A fork of Visit Braila, but targeting Romania
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
