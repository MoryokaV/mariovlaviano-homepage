import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import thumbnail1 from 'public/images/projects/barberef_02.png'
import thumbnail2 from 'public/images/projects/barberef_03.png'

const Work = () => {
  return (
    <Layout title="Freestyle Barber EF">
      <Container px="0">
        <WorkTitle>
          Freestyle Barber EF <Badge>2023</Badge>
        </WorkTitle>

        <Paragraph>
          This is a website created after the opening in september 2023 of a new
          professional barber shop. The design of the page is very neat and
          modern to express the style of the business. With this new information
          channel opened more clients can reach out to this barber shop.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://freestylebarber-ef.ro"
            >
              https://freestylebarber-ef.ro
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Tailwind CSS</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="Freestyle Barber EF website" />
        <WorkImage src={thumbnail2} alt="Freestyle Barber EF website" />
      </Container>
    </Layout>
  )
}

export default Work
