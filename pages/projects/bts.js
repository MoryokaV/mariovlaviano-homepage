import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbnail1 from 'public/images/projects/bts_02.jpg'
import thumbnail2 from 'public/images/projects/bts_03.png'
import thumbnail3 from 'public/images/projects/bts_04.png'

const Work = () => {
  return (
    <Layout title="BTS">
      <Container>
        <WorkTitle>
          Brăila Tech Sprint Website <Badge>2023</Badge>
        </WorkTitle>

        <Paragraph></Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link as={NextLink} target="_blank" href="https://hackathon.bjbraila.ro">
              https://hackathon.bjbraila.ro
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Tailwind CSS</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="Braila Tech Sprint" />
        <WorkImage src={thumbnail2} alt="Braila Tech Sprint" />
        <WorkImage src={thumbnail3} alt="Braila Tech Sprint" />
      </Container>
    </Layout>
  )
}

export default Work
