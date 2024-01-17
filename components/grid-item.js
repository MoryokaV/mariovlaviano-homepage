import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Global } from '@emotion/react'

export const PostGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox scroll={true} cursor="pointer" as={NextLink} href={`/posts/${id}`}>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        style={{
          objectFit: 'cover',
          height: '190px'
        }}
      />
      <LinkOverlay as="div" href={`/posts/${id}`}>
        <Text mt={2} fontSize={18} fontWeight="medium">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14} opacity="70%">
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      scroll={true}
      cursor="pointer"
      as={NextLink}
      href={`/projects/${id}`}
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        style={{
          objectFit: 'cover',
          height: '160px'
        }}
      />
      <LinkOverlay as="div" href={`/projects/${id}`}>
        <Text mt={2} fontSize={20} fontWeight="medium">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14} opacity="85%">
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
