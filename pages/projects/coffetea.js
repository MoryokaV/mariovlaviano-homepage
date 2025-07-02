import { Container, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import thumbnail1 from 'public/images/projects/coffetea_02.png'
import thumbnail2 from 'public/images/projects/coffetea_03.png'

const Work = () => {
  return (
    <Layout title="COFFETEA">
      <Container px="0">
        <WorkTitle>
          COFFETEA <Badge>2024</Badge>
        </WorkTitle>

        <Paragraph>
          Started from a small coffee shop in Brăila, COFFETEA brand never stops
          expanding and growing it&apos;s community.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Website</Meta>

            <Link as={NextLink} target="_blank" href="https://coffetea.ro">
              https://coffetea.ro
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
