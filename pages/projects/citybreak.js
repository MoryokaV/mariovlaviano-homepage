import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbnail1 from 'public/images/projects/citybreak_02.png'
import thumbnail2 from 'public/images/projects/citybreak_03.png'
import thumbnail3 from 'public/images/projects/citybreak_04.png'

const Work = () => {
  return (
    <Layout title="Visit Brăila">
      <Container px="0">
        <WorkTitle>
          City Break <Badge>2023-</Badge>
        </WorkTitle>

        <Paragraph>
          City Break connects all of the cities of Romania into a single mobile
          app. The documentation process before any city break trip is
          drastically simplified by the digitization and centralization of
          information. This app is a fork of{' '}
          <Link as={NextLink} href="/projects/visitbraila">
            Visit Brăila
          </Link>
          , a scaled product which will be transformed in a startup business.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://github.com/moryokav/city-break"
            >
              https://github.com/moryokav/city-break
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/iOS, Web (CMS only)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter, Python, Flask, MongoDB, jQuery, Bootstrap</span>
          </ListItem>
          <ListItem>
            <Meta>Demo</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://youtu.be/Uy1fnQCWw5E"
            >
              https://youtu.be/Uy1fnQCWw5E
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="City Break" />
        <WorkImage src={thumbnail2} alt="City Break" />
        <WorkImage src={thumbnail3} alt="City Break" />
      </Container>
    </Layout>
  )
}

export default Work
