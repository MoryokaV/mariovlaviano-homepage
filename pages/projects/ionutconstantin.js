import { Container, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import thumbnail1 from 'public/images/projects/ionut_01.png'
import thumbnail2 from 'public/images/projects/ionut_02.png'

const Work = () => {
  return (
    <Layout title="ionutconstantin.ro">
      <Container px="0">
        <WorkTitle>
          ionutconstantin.ro <Badge>2025</Badge>
        </WorkTitle>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Website</Meta>

            <Link
              as={NextLink}
              target="_blank"
              href="https://ionutconstantin.ro"
            >
              https://ionutconstantin.ro
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress, Elementor</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} />
        <WorkImage src={thumbnail2} />
      </Container>
    </Layout>
  )
}

export default Work
