import Link from 'next/link'
import { Text, Box, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  gap: 8px;

  &:hover .bracket-left {
    transform: translateX(-3px);
  }

  &:hover .bracket-right {
    transform: translateX(3px);
  }
`

const Bracket = styled.div`
  transition: all 0.3s ease;
  font-weight: 400;
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Box display="flex" gap="3px">
          <Bracket className="bracket-left">&#123;</Bracket>
          <Text fontSize="14px" fontWeight="300">
            MV
          </Text>
          <Bracket className="bracket-right">&#125;</Bracket>
        </Box>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          ml={3}
        >
          Mario Vlaviano
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
