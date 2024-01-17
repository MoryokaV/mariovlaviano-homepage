import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseMenuStyle = definePartsStyle({
  list: {
    _dark: {
      bg: '#202023'
    },
    _light: {
      bg: '#fff'
    }
  },
  item: {
    _dark: {
      _focus: {
        bg: 'whiteAlpha.100'
      },
      bg: '#202023'
    },
    _light: {
      _focus: {
        bg: 'gray.100'
      },
      bg: '#fff'
    }
  }
})

const menuTheme = defineMultiStyleConfig({ baseStyle: baseMenuStyle })

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#1a1a1f')(props)
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
  },
  Menu: menuTheme
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  tmuxBlockPrimaryBg: '#93a1a1',
  tmuxBlockSecondaryBg: '#657b83'
}

const semanticTokens = {
  colors: {
    bodyDimmed: {
      default: '#dbd3c8',
      _dark: '#1a1a1c'
    },
    terminalBorder: {
      default: 'blackAlpha.300',
      _dark: '#393940'
    },
    termRed: {
      default: '#c14935',
      _dark: '#ff7a93'
    },
    termGreen: {
      default: '#859900',
      _dark: '#b9f27c'
    },
    termYellow: {
      default: '#b58900',
      _dark: '#E0AF68'
    },
    tmuxStatusBg: {
      default: '#ded9c5',
      _dark: '#2a2a2e'
    },
    tmuxActiveTabBg: {
      default: '#2aa198',
      _dark: '#0184ab'
    },
    tmuxBigArrowBg: {
      default: '#f4f0e9',
      _dark: '#f0e7db'
    },
    tmuxBlockFg: {
      default: '#f0e7db',
      _dark: 'black'
    },
    termMagenta: {
      default: '#d33682',
      _dark: '#ff63c3'
    },
    termBlue: {
      default: '#268bd2',
      _dark: '#7AA2F7'
    },
    postBg: {
      default: '#fff',
      _dark: '#1f1f23'
    }
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  semanticTokens
})

export default theme
