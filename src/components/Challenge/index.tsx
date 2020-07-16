import React, { useCallback, useState } from 'react'

import { Container, Grid, ContainerList, Category } from './styles'

import ChallengeInfo from '../ChallengeInfo'
import ChallengeButton from '../ChallengeButton'

import { useFetch } from 'src/hooks/useFetch'

interface Challenge {
  name: string
}

const Challenge: React.FC = () => {
  const [challengeShortDescription, setChallengeShortDescription] = useState('')
  const [challengeName, setChallengeName] = useState('')
  const [challengeSelected, setChallengeSelected] = useState('')

  const { data } = useFetch<Challenge[]>('/contents/challenges')
  const handleSelectChange = useCallback((id: number) => {
    const challenges = document.getElementById('listOfChallenges')?.childNodes
    challenges?.forEach(challenge => {
      if (challenge.isEqualNode(document.getElementById(id.toString()))) {
        data?.forEach(selectedChallenge => {
          if (selectedChallenge.name.split('.')[0] === challenge.firstChild?.textContent) {
            setChallengeName(selectedChallenge.name.split('.')[0])
            setChallengeShortDescription(selectedChallenge.name)
            setChallengeSelected(id.toString())
          }
        })
      }
    })
  }, [data])

  return (
    <Container>
      <Grid>
        <ContainerList>
          <Category>
            <span>Challenges</span>
          </Category>
          <div id='listOfChallenges'>
            {data?.map((challenge, i) => (
              <div key={i} id={i.toString()} onClick={() => handleSelectChange(i)}>
                <ChallengeButton challengeName={challenge.name.split('.')[0]} selected={challengeSelected === i.toString()}/>
              </ div>
            ))}
          </div>
        </ContainerList>
        {challengeName && challengeShortDescription ? <ChallengeInfo challengeName={challengeName} challengeShortDescription={challengeShortDescription}/> : <></>}
      </Grid>
    </Container>
  )
}

export default Challenge
