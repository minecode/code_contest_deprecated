import React from 'react'

import { useFetch } from 'src/hooks/useFetch'

import {
  ContainerInfo,
  ContainerDescription,
  Title,
  Separator,
  Description,
  Info,
  InputWrapper
} from './styles'

import base64 from 'base-64'
import Drop from '../Drop'

export interface Props {
  challengeName?: string;
  challengeShortDescription?: string;
}

interface Challenge {
  name: string;
  content: string;
}

const ChallengeInfo: React.FC<Props> = ({ challengeName }) => {
  const { data } = useFetch<Challenge>(
    `/contents/challenges/${challengeName}.json`
  )

  return (
    <>
      <ContainerInfo>
        <Title>
          {data && base64.decode(data.content).length > 1
            ? JSON.parse(base64.decode(data.content)).title
            : ''}
        </Title>
        <Separator />
        <Description>
          {data && base64.decode(data.content).length > 1
            ? JSON.parse(base64.decode(data.content)).difficulty
            : ''}
        </Description>
      </ContainerInfo>
      <ContainerDescription>
        <Info>
          {data && base64.decode(data.content).length > 1
            ? JSON.parse(base64.decode(data.content)).description
            : ''}
        </Info>
        <InputWrapper>
          <Drop />
        </InputWrapper>
      </ContainerDescription>
    </>
  )
}

export default ChallengeInfo
