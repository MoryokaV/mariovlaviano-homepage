import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  lightBodyDimmed: '#dbd3c8',
  darkBodyDimmed: '#1a1a1c',
  tokyoRed: '#ff7a93',
  tokyoBrightGreen: '#b9f27c',
  tokyoBlue: '#7da6ff',
  tokyoYellow: '#E0AF68',
  tmuxStatusBgDark: '#2a2a2e',
  tmuxStatusBgLight: '#2a2a2e',
  tmuxActiveTab: "#017395"
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })

export default theme
