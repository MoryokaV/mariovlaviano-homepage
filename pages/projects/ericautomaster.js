import { Container, Link, Badge, List, ListItem, Text } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import thumbnail1 from 'public/images/projects/ericautomaster_02.png'
import thumbnail2 from 'public/images/projects/ericautomaster_03.png'

const Work = () => {
  return (
    <Layout title="Ericautomaster">
      <Container px="0">
        <WorkTitle>
          Eric Automaster landing page <Badge>2023</Badge>
        </WorkTitle>

        <Paragraph>
          Eric Automaster is a driving school based in Brăila, Romania. Part of
          a marketing strategy, the prupose of this website is to grow up the
          popularity of the business.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Website</Meta>

            <Link
              as={NextLink}
              target="_blank"
              href="https://ericautomaster.ro"
            >
              https://ericautomaster.ro
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, Bootstrap 5</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="Eric Automaster" />
        <WorkImage src={thumbnail2} alt="Eric Automaster" />
      </Container>
    </Layout>
  )
}

export default Work
