import Layout from '../../components/layouts/article'
import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '@/components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import thumbnail1 from 'public/images/projects/cosmeticsshop_02.png'
import thumbnail2 from 'public/images/projects/cosmeticsshop_03.png'
import thumbnail3 from 'public/images/projects/cosmeticsshop_04.png'

const Work = () => {
  return (
    <Layout title="Cosmetics Shop">
      <Container px="0">
        <WorkTitle>
          eCommerce Cosmetics Shop<Badge></Badge>
        </WorkTitle>

        <Paragraph>
          This was one of my first cross-platform mobile apps ever built.
          Started it as a side project to deepen the knowledge about Flutter
          Framework. The idea of a cosmetics shop came from a business of a
          family friend. The final product doesn't have a very high quality
          code, but the journey developing this app was full of new concepts
          learned.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://github.com/MoryokaV/eCommerce-Cosmetics-Shop"
            >
              https://github.com/MoryokaV/eCommerce-Cosmetics-Shop
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter, Dart, Firebase, Sqlite</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="Cosmetics shop app" />
        <WorkImage src={thumbnail2} alt="Cosmetics shop app" />
        <WorkImage src={thumbnail3} alt="Cosmetics shop app" />
      </Container>
    </Layout>
  )
}

export default Work
