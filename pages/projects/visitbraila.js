import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbnail1 from 'public/images/projects/visitbraila_02.png'
import thumbnail2 from 'public/images/projects/visitbraila_03.png'

const Work = () => {
  return (
    <Layout title="Visit Brăila">
      <Container>
        <WorkTitle>
          Visit Brăila <Badge>2022-2023</Badge>
        </WorkTitle>

        <Paragraph>
          Visit Brăila connects citizens and tourists with each other. Sights, tours, restaurants, hotels and events
          have a common place to be promoted in. This toursim app was designed for my home town at the proposal of the
          local library and with the support of the municipality. Beside tourists, this app is a great informational
          channel for history enthusiasts as our city is not valuing the fabulous architecture and historiography.
          Citizens stay in touch with the latest events running in their city by viewing them in app and getting a daily
          newsletter. With the contribution of the local authorities we did a good job marketing Brăila as a city break
          destination.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link as={NextLink} target="_blank" href="https://github.com/moryokav/visit-braila">
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
            <span>Flutter, Python, Flask, MongoDB, jQuery, Bootstrap</span>
          </ListItem>
          <ListItem>
            <Meta>Demo</Meta>
            <Link as={NextLink} target="_blank" href="https://youtu.be/c07yV4QpVzo">
              https://youtu.be/c07yV4QpVzo
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="Visit Braila" />
        <WorkImage src={thumbnail2} alt="Visit Braila" />
      </Container>
    </Layout>
  )
}

export default Work
