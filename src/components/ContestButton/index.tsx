import React from 'react'
import { titleCase } from '../Utils'

import { Container, ContestIcon } from './styles'
import { useSelector } from 'react-redux'
import { useFetch } from 'src/hooks/useFetch'

export interface Props {
  contestName: string
  size: number
}

interface UserScore {
  score: number
  number: number
}

const ContestButton: React.FC<Props> = ({ contestName, size }) => {
  const selectedChallengeName = useSelector((state: any) => state.data.challenge.name)
  const dataAuth = useSelector((state: any) => state.data.auth)
  const { data: userScore } = useFetch<UserScore[]>(`http://localhost:4001/contests/${dataAuth.user.id}/${contestName}`)
  return (
    <Container className={selectedChallengeName && contestName.split('/')[0] === selectedChallengeName.split('/')[0].split(' ').join('_') ? 'active' : ''}>
      <div style={{ width: '100%' }}>
        <div>
          <ContestIcon />
          {contestName ? <span>{titleCase(contestName.split('/')[0])}</span> : <></>}
        </div>
        {userScore ? <span>{userScore[0]?.number}/{size}</span> : <span>0/{size}</span> }
      </div>
    </Container>
  )
}

export default ContestButton
