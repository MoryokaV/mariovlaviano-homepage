import { Container, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import thumbnail1 from 'public/images/projects/orpra_02.png'
import thumbnail2 from 'public/images/projects/orpra_03.png'

const Work = () => {
  return (
    <Layout title="ORPRA.AI">
      <Container px="0">
        <WorkTitle>
          ORPRA.AI <Badge>2025</Badge>
        </WorkTitle>

        <Paragraph>
          AI startup needed a way to communicate with the potential customers.
          Located in Germany it needed a multilingual website (EN and DE).
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Website</Meta>

            <Link as={NextLink} target="_blank" href="https://orpra.ai/en">
              https://orpra.ai/en
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress, Elementor, Polylang</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="ORPRA website" />
        <WorkImage src={thumbnail2} alt="ORPRA website" />
      </Container>
    </Layout>
  )
}

export default Work
