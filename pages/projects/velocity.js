import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbnail1 from 'public/images/projects/velocity_02.png'
import thumbnail2 from 'public/images/projects/velocity_03.png'

const Work = () => {
  return (
    <Layout title="Velocity">
      <Container px="0">
        <WorkTitle>
          Velocity Robotics <Badge>2022</Badge>
        </WorkTitle>

        <Paragraph>
          Presentation website of the Velocity Robotics team of my high school.
          A replacement of the traditional PowerPoint made as a business card
          for sponsors.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://cngmm.ro/velocity"
            >
              https://cngmm.ro/velocity
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Tailwind CSS</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="Eric Automaster" />
        <WorkImage src={thumbnail2} alt="Eric Automaster" />
      </Container>
    </Layout>
  )
}

export default Work
