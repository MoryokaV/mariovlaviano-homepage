import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from 'components/fonts'
import theme from 'libs/theme'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <DefaultSeo
        description="Mario Vlaviano is a software developer based in Romania with a passion for learning new technologies."
        openGraph={{
          type: 'website',
          locale: 'en-EN',
          url: 'mariovlaviano.ro',
          siteName: 'Mario Vlaviano - Homepage',
          title: 'Mario Vlaviano - Homepage',
          description:
            'Mario Vlaviano is a software developer based in Romania.',
          images: [
            {
              url: 'https://mariovlaviano.ro/og-logo.jpg',
              width: 1200,
              height: 630,
              alt: 'Homepage logo'
            }
          ]
        }}
        keywords={[
          'mario vlaviano',
          'vlaviano mario',
          'mario alexandru vlaviano',
          'vma software',
          'software engineer',
          'entrepreneur',
          'visit braila',
          'city break',
          'software developer',
          'flutter developer',
          'web designer'
        ]}
      />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route}></Component>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default App
