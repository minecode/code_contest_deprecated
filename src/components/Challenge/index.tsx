import React, { useCallback, useState } from 'react'

import { Container, Grid, ContainerList, Category } from './styles'

import ChallengeInfo from '../ChallengeInfo'
import ChallengeButton from '../ChallengeButton'

import { useFetch } from 'src/hooks/useFetch'
import Drop from '../Drop'

interface Challenge {
  name: string
}

const Challenge: React.FC = () => {
  const [challengeName, setChallengeName] = useState('')
  const [challengeSelected, setChallengeSelected] = useState('')

  const { data } = useFetch<Challenge[]>('/contents/challenges')
  const handleSelectChange = useCallback((id: number) => {
    const challenges = document.getElementById('listOfChallenges')?.childNodes
    challenges?.forEach(challenge => {
      if (challenge.isEqualNode(document.getElementById(id.toString()))) {
        data?.forEach(selectedChallenge => {
          const selectedChallengeName = selectedChallenge.name.split('_').join(' ')
          if (selectedChallengeName === challenge.firstChild?.textContent) {
            setChallengeName(selectedChallengeName)
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
            {data?.filter((challenge: any) => {
              return challenge.name !== 'requirements.txt'
            }).map((challenge, i) => (
              <div key={i} id={i.toString()} onClick={() => handleSelectChange(i)}>
                <ChallengeButton challengeName={challenge.name} selected={challengeSelected === i.toString()}/>
              </ div>
            ))}
          </div>
        </ContainerList>
        {challengeName ? <><ChallengeInfo challengeName={challengeName}/><Drop challengeName={challengeName} /></> : <></>}
      </Grid>
    </Container>
  )
}

export default Challenge
