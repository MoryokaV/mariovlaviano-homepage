import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  SimpleGrid
} from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbnail1 from 'public/images/projects/visitbraila_02.png'
import thumbnail2 from 'public/images/projects/visitbraila_03.png'
import thumbnail3 from 'public/images/projects/visitbraila_04.png'
import thumbnail4 from 'public/images/projects/visitbraila_05.png'

const Work = () => {
  return (
    <Layout title="Visit Brăila">
      <Container px="0">
        <WorkTitle>
          Visit Brăila <Badge>2022-2023</Badge>
        </WorkTitle>

        <Paragraph>
          Visit Brăila connects citizens and tourists with each other. Sights,
          tours, restaurants, hotels and events have a common place to be
          promoted in. This toursim app was designed for my home town at the
          proposal of the local library and with the support of the
          municipality. Beside tourists, this app is a great informational
          channel for history enthusiasts as our city is not valuing the
          fabulous architecture and historiography. Citizens stay in touch with
          the latest events running in their city by viewing them in app and
          getting a daily newsletter. With the contribution of the local
          authorities we did a good job marketing Brăila as a city break
          destination.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Download</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://visit.bjbraila.ro/install"
            >
              https://visit.bjbraila.ro/install
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://github.com/moryokav/visit-braila"
            >
              https://github.com/moryokav/visit-braila
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/iOS, Web (CMS only)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flutter, TypeScript, MongoDB, Express, React, Bootstrap</span>
          </ListItem>
          <ListItem>
            <Meta>News</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://obiectivbr.ro/content/visit-br%C4%83ila"
            >
              https://obiectivbr.ro/content/visit-braila
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={{ sm: 2 }} gap={{ sm: 2 }}>
          <WorkImage src={thumbnail3} alt="Visit Braila app screenshots" />
          <WorkImage src={thumbnail4} alt="Visit Braila app screenshots" />
        </SimpleGrid>
        <WorkImage src={thumbnail1} alt="Visit Braila app screenshots" />
        <WorkImage src={thumbnail2} alt="Visit Braila app screenshots" />
      </Container>
    </Layout>
  )
}

export default Work
