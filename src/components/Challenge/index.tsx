import React from 'react'

import { Container, Grid } from './styles'

import ChallengeInfo from '../ChallengeInfo'
import ChallengeList from '../ChallengeList'

import Drop from '../Drop'
import { useSelector } from 'react-redux'

const Challenge: React.FC = () => {
  const data = useSelector((state: any) => state.data)
  const authentication = data.auth.authenticated
  const challengeName = data.challenge.name

  return (
    <Container>
      <Grid>
        <ChallengeList />
        {challengeName ? (
          <>
            <ChallengeInfo />
            {authentication ? (
              <Drop />
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </Grid>
    </Container>
  )
}

export default Challenge
