import React from 'react'
import { titleCase } from '../Utils'

import { Container, HashtagIcon } from './styles'
import { useSelector } from 'react-redux'

export interface Props {
  contestName: string
}

const ChallengeButton: React.FC<Props> = ({ contestName }) => {
  const selectedChallengeName = useSelector((state: any) => state.data.challenge.name)
  return (
    <Container className={selectedChallengeName && contestName === selectedChallengeName.split(' ').join('_') ? 'active' : ''}>
      <div>
        <HashtagIcon />
        {contestName ? <span>{titleCase(contestName)}</span> : <></>}
      </div>
    </Container>
  )
}

export default ChallengeButton
