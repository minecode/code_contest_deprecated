import React from 'react'

import { Container, Grid, LoginInfo, Message } from './styles'
import { Col, Row } from 'react-bootstrap'

import ChallengeInfo from '../ChallengeInfo'
import ContestList from '../ContestList'

import Drop from '../Drop'
import { useSelector } from 'react-redux'

const Challenge: React.FC = () => {
  const data = useSelector((state: any) => state.data)
  const authentication = data.auth.authenticated
  const challengeName = data.challenge.name

  return (
    <Container>
      <Grid>
        <ContestList />
        {challengeName ? (
          <>
            <ChallengeInfo />
            {authentication ? (
              <Drop />
            ) : (
              <Message>
                <Row>
                  <Col xs={12} className="text-center">
                    <LoginInfo>You need to log in to send your solution!</LoginInfo>
                  </Col>
                </Row>
              </Message>
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
