const { Text } = require('@chakra-ui/react')

const Footer = () => {
  return (
    <Text align="center" mt="auto" fontSize="sm" opacity={0.5}>
      &copy; {new Date().getFullYear()} Mario Vlaviano. All rights reserved.
    </Text>
  )
}

export default Footer
