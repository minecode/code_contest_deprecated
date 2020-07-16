import React from 'react'

import { Container, HashtagIcon } from './styles'

export interface Props {
  challengeName: string;
  selected?: boolean;
}

const ChallengeButton: React.FC<Props> = ({ challengeName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{challengeName}</span>
      </div>
    </Container>
  )
}

export default ChallengeButton
