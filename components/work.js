import { ChevronRightIcon } from '@chakra-ui/icons'
import { Image, Link, Box, Heading, Badge } from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'

export const WorkTitle = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/projects">
      Projects
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image
    as={NextImage}
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    mb={4}
  ></Image>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
