import React from 'react'

import { Container, Grid, LoginInfo } from './styles'
import { Col, Row } from 'react-bootstrap'

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
              <Row>
                <Col xs={12} className="text-center">
                  <LoginInfo>You need to log in to send your solution!</LoginInfo>
                </Col>
              </Row>
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
