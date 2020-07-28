import React from 'react'
import { titleCase } from '../Utils'

import { Container, HashtagIcon } from './styles'
import { useSelector } from 'react-redux'

export interface Props {
  challengeName: string
}

const ChallengeButton: React.FC<Props> = ({ challengeName }) => {
  const selectedChallengeName = useSelector((state: any) => state.data.challenge.name)
  return (
    <Container className={selectedChallengeName && challengeName === selectedChallengeName.split(' ').join('_') ? 'active' : ''}>
      <div>
        <HashtagIcon />
        {challengeName ? <span>{titleCase(challengeName)}</span> : <></>}
      </div>
    </Container>
  )
}

export default ChallengeButton
