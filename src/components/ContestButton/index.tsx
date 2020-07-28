import React from 'react'
import { titleCase } from '../Utils'

import { Container, HashtagIcon } from './styles'
import { useSelector } from 'react-redux'

export interface Props {
  contestName: string
}

const ContestButton: React.FC<Props> = ({ contestName }) => {
  const selectedChallengeName = useSelector((state: any) => state.data.challenge.name)
  return (
    <Container className={selectedChallengeName && contestName === titleCase(selectedChallengeName.split('/')[0].split('_').join(' ')) ? 'active' : ''}>
      <div>
        <HashtagIcon />
        {contestName ? <span>{titleCase(contestName)}</span> : <></>}
      </div>
    </Container>
  )
}

export default ContestButton
