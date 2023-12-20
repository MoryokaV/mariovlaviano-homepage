import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Link,
  Image,
  HStack,
  VStack,
  Text,
  Button,
  useColorModeValue,
  useToast,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  AiFillLike,
  AiOutlineInfoCircle,
  AiOutlineLike,
  AiOutlineShareAlt
} from 'react-icons/ai'
import styled from '@emotion/styled'
import { useState } from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/mario.vlv/'

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

export const PostHeader = ({ date }) => (
  <HStack gap={4} mb={4}>
    <Image
      borderColor="whiteAlpha.800"
      borderWidth={2}
      borderStyle="solid"
      maxWidth="60px"
      display="inline-block"
      borderRadius="full"
      src="/images/mario.jpg"
      alt="Profile picture"
    />
    <VStack align="start" gap={0}>
      <HStack>
        <Text fontWeight="700" fontSize="lg">
          Mario Vlaviano
        </Text>
        <Link
          href={INSTAGRAM_URL}
          fontSize="sm"
          target="_blank"
          fontWeight="semibold"
        >
          + Follow
        </Link>
      </HStack>
      <HStack opacity="50%" fontSize="md">
        <Text>{date}</Text>
        <TimeIcon />
      </HStack>
    </VStack>
  </HStack>
)

export const PostParagraph = styled.p`
  text-align: left;
  text-indent: 1em;
`

export const PostImage = ({ src, alt, brightness, display }) => (
  <a data-fancybox="post-gallery" href={src.src}>
    <NextImage
      src={src}
      alt={alt}
      loading="eager"
      style={{
        objectFit: 'cover',
        height: '220px',
        width: '100%',
        filter: `brightness(${brightness})`,
        display: display
      }}
    ></NextImage>
  </a>
)

const LikeButton = () => {
  const [liked, like] = useState(false)

  return (
    <Button
      variant="ghost"
      onClick={() => {
        like(!liked)
      }}
      color={useColorModeValue('gray.600', 'gray.400')}
      _hover={{
        color: useColorModeValue('gray.800', 'gray.200'),
        backgroundColor: useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
      }}
    >
      <HStack gap={2}>
        {liked ? (
          <AiFillLike color={liked && '#268bd2'} size={20} />
        ) : (
          <AiOutlineLike size={20} />
        )}
        <Text color={liked && '#268bd2'}>Like</Text>
      </HStack>
    </Button>
  )
}

const ShareButton = () => {
  const toast = useToast()
  return (
    <Button
      variant="ghost"
      onClick={() => {
        if (!toast.isActive('clipboard-toast')) {
          toast({
            id: 'clipboard-toast',
            position: 'bottom-right',
            duration: 8000,
            render: () => (
              <Box
                backgroundColor="bodyDimmed"
                shadow="md"
                borderRadius="md"
                px={4}
                py={3}
              >
                <HStack mb={2} color="gray.500">
                  <AiOutlineInfoCircle />
                  <Heading as="h6" size="md">
                    Post URL copied to clipboard.
                  </Heading>
                </HStack>
                <Text opacity="50%">{window.location.href}</Text>
              </Box>
            )
          })
        }

        navigator.clipboard.writeText(window.location.href)
      }}
      color={useColorModeValue('gray.600', 'gray.400')}
      _hover={{
        color: useColorModeValue('gray.800', 'gray.200'),
        backgroundColor: useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
      }}
    >
      <HStack gap={2}>
        <AiOutlineShareAlt size={20} /> <Text>Share</Text>
      </HStack>
    </Button>
  )
}

export const PostButtons = () => (
  <SimpleGrid columns={[2]} px={2} py={1}>
    <LikeButton></LikeButton>
    <ShareButton></ShareButton>
  </SimpleGrid>
)
