import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextImage from 'next/image'

export const SkillTitle = styled.p`
  font-weight: 500;
  display: flex;
  gap: 8px;
  white-space: nowrap;
  flex-wrap: wrap;
  margin-bottom: 6px;
`

export const SkillIcon = ({ src, invertOnDark }) => (
  <NextImage
    src={src}
    alt="skill icon"
    width={20}
    height={20}
    style={{
      filter: `invert(${useColorModeValue('0', invertOnDark ? '1' : '0')}`
    }}
  />
)
