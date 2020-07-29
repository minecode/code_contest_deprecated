import React from 'react'
import { titleCase } from '../Utils'

import { Container, ContestIcon } from './styles'
import { useSelector } from 'react-redux'

export interface Props {
  contestName: string
}

const ContestButton: React.FC<Props> = ({ contestName }) => {
  const selectedChallengeName = useSelector((state: any) => state.data.challenge.name)
  return (
    <Container className={selectedChallengeName && contestName.split('/')[0] === selectedChallengeName.split('/')[0].split(' ').join('_') ? 'active' : ''}>
      <div>
        <ContestIcon />
        {contestName ? <span>{titleCase(contestName.split('/')[0])}</span> : <></>}
      </div>
    </Container>
  )
}

export default ContestButton
