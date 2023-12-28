import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbnail1 from 'public/images/projects/cloudstorage_02.jpg'
import thumbnail2 from 'public/images/projects/cloudstorage_03.png'

const Work = () => {
  return (
    <Layout title="Cloud Storage">
      <Container px="0">
        <WorkTitle>
          Cloud Storage <Badge>2020-2021</Badge>
        </WorkTitle>

        <Paragraph>
          A clone o cloud storage concept (e.g. Google Drive, iCloud). This was
          one of my first significantly bigger project since I started
          programming. Developing this desktop app I have practiced more the P2P
          File Sharing concept in C#. I&apos;m not identifing as a desktop app
          developer yet :) and I&apos;m not planning this in the near future,
          but, as always, the experience was welcomed.
        </Paragraph>

        <List ml={{ base: 0, sm: 4 }} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://github.com/MoryokaV/Cloud-Storage-App"
            >
              https://github.com/MoryokaV/Cloud-Storage-App
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C#, .NET Framework</span>
          </ListItem>
        </List>

        <WorkImage src={thumbnail1} alt="Cloud storage desktop app" />
        <WorkImage src={thumbnail2} alt="Cloud storage desktop app" />
      </Container>
    </Layout>
  )
}

export default Work
