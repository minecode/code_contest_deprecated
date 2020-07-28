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
import ReactMarkdown from 'react-markdown'
import { titleCase } from '../Utils'
import { useSelector } from 'react-redux'

export interface Props {
  challengeName?: string;
}

interface Challenge {
  name: string;
  content: string;
}

const ChallengeInfo: React.FC = () => {
  const challengeName = useSelector((state: any) => state.data.challenge.name)
  const { data } = useFetch<Challenge>(
    `/contents/contests/${challengeName?.split(' ').join('_')}/index.md`
  )

  return (
    <>
      <ContainerInfo>
        <Title>
          {titleCase(challengeName as string)}
        </Title>
        <Separator />
      </ContainerInfo>
      <ContainerDescription>
        <Info>
          {data && base64.decode(data.content).length > 1
            ? <ReactMarkdown source={base64.decode(data.content)} />
            : ''}
        </Info>
      </ContainerDescription>
    </>
  )
}

export default ChallengeInfo
