import Layout from '@/components/layouts/article'
import Paragraph from '@/components/paragraph'
import { Box } from '@chakra-ui/react'

const Tools = () => {
  return (
    <Layout>
      <Paragraph>
        My desk is the place I spent most of my time working every day. I
        designed this space to be productive and good looking being in the
        living room of my house. I can&apos;t say that there will ever be a
        final version of my desk setup, because I always try to make it cleaner
        and modern. This is a list with a part of the tools that help me achieve
        my goals.
      </Paragraph>
      <Box pt={2}></Box>
    </Layout>
  )
}

export default Tools
