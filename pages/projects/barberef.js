import { Container, Badge, List, ListItem, Text } from '@chakra-ui/react'
import { WorkTitle, Meta, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

{
  /*
import thumbnail1 from 'public/images/projects/bts_02.jpg'
import thumbnail2 from 'public/images/projects/bts_03.png'
import thumbnail3 from 'public/images/projects/bts_04.png'
*/
}

const Work = () => {
  return (
    <Layout title="Freestyle Barber EF">
      <Container>
        <WorkTitle>
          Freestyle Barber EF <Badge>2023</Badge>
        </WorkTitle>

        <Paragraph>
          This is a website created after the opening in september 2023 of a new professional barber shop. The design of
          the page is very neat and modern to express the style of the business. With this new information channel
          opened more clients can reach out to this barber shop.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Text color="gray" display="inline">
              link comming soon
              <ExternalLinkIcon mx={2} />
            </Text>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Tailwind CSS</span>
          </ListItem>
        </List>

        {/*
        <WorkImage src={thumbnail1} alt="Braila Tech Sprint" />
        <WorkImage src={thumbnail2} alt="Braila Tech Sprint" />
        <WorkImage src={thumbnail3} alt="Braila Tech Sprint" />
        */}
      </Container>
    </Layout>
  )
}

export default Work
