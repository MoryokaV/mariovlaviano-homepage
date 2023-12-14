import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Link, Image } from '@chakra-ui/react'
import NextLink from 'next/link'
import NextImage from 'next/image'

export const PostTitle = () => (
  <Box mb={4}>
    <span>
      <ChevronLeftIcon />
    </span>
    <Link as={NextLink} href="/posts">
      Posts
    </Link>
  </Box>
)

export const PostImage = ({ src, alt, opacity, display }) => (
  <a data-fancybox="post-gallery" href={src.src}>
    <NextImage
      src={src}
      alt={alt}
      loading="eager"
      style={{
        objectFit: 'cover',
        height: '220px',
        width: '100%',
        filter: `brightness(${opacity})`,
        display: display
      }}
    ></NextImage>
  </a>
)
