import React from 'react'

import { useFetch } from 'src/hooks/useFetch'

import {
  ContainerInfo,
  ContainerDescription,
  Title,
  Separator,
  Info
} from './styles'

import base64 from 'base-64'

export interface Props {
  challengeName?: string;
}

interface Challenge {
  name: string;
  content: string;
}

const ChallengeInfo: React.FC<Props> = ({ challengeName }) => {
  const { data } = useFetch<Challenge>(
    `/contents/challenges/${challengeName?.split(' ').join('_')}/index.yml`
  )

  return (
    <>
      <ContainerInfo>
        <Title>
          {challengeName}
        </Title>
        <Separator />
      </ContainerInfo>
      <ContainerDescription>
        <Info>
          {data && base64.decode(data.content).length > 1
            ? base64.decode(data.content)
            : ''}
        </Info>
      </ContainerDescription>
    </>
  )
}

export default ChallengeInfo
