import { Container, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import thumbnail1 from 'public/images/projects/upscale_02.png'
import thumbnail2 from 'public/images/projects/upscale_03.png'

const Work = () => {
  return (
    <Layout title="Upscale Smart Consulting">
      <Container px="0">
        <WorkTitle>
          Upscale Smart Consulting website <Badge>2024</Badge>
        </WorkTitle>

        <Paragraph>
          Upscale Smart Consulting is a consultancy firm that helps business
          owners get funds faster. The website is meant to inform clients about
          the services that the agency provides. The blog section shows some
          tips&tricks about every available funds you can access.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Website</Meta>

            <Link
              as={NextLink}
              target="_blank"
              href="https://upscale-consulting.ro"
            >
              https://upscale-consulting.ro
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress, Elementor</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="Upscale Smart Consulting website" />
        <WorkImage src={thumbnail2} alt="Upscale Smart Consulting website" />
      </Container>
    </Layout>
  )
}

export default Work
