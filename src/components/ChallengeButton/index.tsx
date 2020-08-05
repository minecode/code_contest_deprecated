import React from 'react'
import { titleCase } from '../Utils'

import { Container, HashtagIcon, CheckIcon } from './styles'
import { useSelector } from 'react-redux'
import { useFetch } from 'src/hooks/useFetch'

export interface Props {
  challengeName: string
}
interface UserScore {
  score: number
}

const ChallengeButton: React.FC<Props> = ({ challengeName }) => {
  const selectedChallengeName = useSelector((state: any) => state.data.challenge.name)
  const dataAuth = useSelector((state: any) => state.data.auth)
  const { data: userScore } = useFetch<UserScore[]>(`http://localhost:4001/contests/${dataAuth.user.id}/${challengeName}`)

  return (
    <Container className={selectedChallengeName && challengeName.split('/')[0] === selectedChallengeName.split('/')[0].split(' ').join('_') && challengeName.split('/')[1] === selectedChallengeName.split('/')[1].split(' ').join('_') ? 'active' : ''}>
      <div style={{ width: '100%' }}>
        <div>
          <HashtagIcon />
          {challengeName ? <span>{titleCase(challengeName.split('/')[1])}</span> : <></>}
        </div>
        {userScore && userScore.length > 0 ? <CheckIcon /> : <></> }
      </div>
    </Container>
  )
}

export default ChallengeButton
