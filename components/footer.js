const { Text } = require('@chakra-ui/react')

const Footer = () => {
  return (
    <Text align="center" fontSize="sm" opacity={0.6}>
      &copy; {new Date().getFullYear()} Mario Vlaviano. All rights reserved.
    </Text>
  )
}

export default Footer
