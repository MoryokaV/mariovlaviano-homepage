import { Flex, Box, Spacer } from '@chakra-ui/react'
import { ArrowRight, ArrowLeft, OutlineArrowRight } from 'components/icons'

export const TmuxStatusline = ({ ip, iteration }) => (
  <Flex bg="tmuxStatusBg" lineHeight="5" fontWeight="bold" fontSize={{ base: 'xs', sm: 'sm' }} fontFamily="mono">
    <Box bg="tmuxBigArrowBg" color="black" px="2">
      {iteration}
    </Box>
    <ArrowRight borderLeftColor="tmuxBigArrowBg" bg="tmuxBlockPrimaryBg" />
    <Box bg="tmuxBlockPrimaryBg" color="tmuxBlockFg" px="2">
      moryoka
    </Box>
    <ArrowRight borderLeftColor="tmuxBlockPrimaryBg" />
    <ArrowRight borderLeftColor="tmuxStatusBg" bg="tmuxBigArrowBg" />
    <Box bg="tmuxBigArrowBg" color="black" px="2">
      0
    </Box>
    <ArrowRight borderLeftColor="tmuxBigArrowBg" bg="tmuxActiveTabBg" />
    <Box bg="tmuxActiveTabBg" px="2" color="white">
      zsh
    </Box>
    <ArrowRight borderLeftColor="tmuxActiveTabBg" />
    <Box display={{ base: 'none', sm: 'block' }} px="2" fontWeight="normal" color="gray">
      1
    </Box>
    <OutlineArrowRight />
    <Box display={{ base: 'none', sm: 'block' }} color="gray" px="2" fontWeight="normal">
      nvim
    </Box>

    <Spacer />

    <ArrowLeft borderRightColor="tmuxBlockSecondaryBg" />
    <ArrowLeft borderRightColor="tmuxBlockPrimaryBg" bg="tmuxBlockSecondaryBg" />
    <Box px="2" bg="tmuxBlockPrimaryBg" color="tmuxBlockFg">
      {ip}
    </Box>
  </Flex>
)
