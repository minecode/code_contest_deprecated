import React, { useCallback } from 'react'

import { ContainerList, Category } from './styles'

import ChallengeButton from '../ChallengeButton'

import { useFetch } from 'src/hooks/useFetch'
import { titleCase } from '../Utils'
import { useSelector, useDispatch } from 'react-redux'

interface Challenge {
    name: string;
}

const ChallengeList: React.FC = () => {
  const dispatch = useDispatch()
  const dataAuth = useSelector((state: any) => state.data.auth)

  const { data } = useFetch<Challenge[]>('/contents/challenges')
  const handleSelectChange = useCallback(
    (id: number) => {
      const challenges = document.getElementById('listOfChallenges')?.childNodes
        challenges?.forEach((challenge) => {
          if (
            challenge.isEqualNode(
              document.getElementById(id.toString())
            )
          ) {
                data?.forEach((selectedChallenge) => {
                  const selectedChallengeName = selectedChallenge.name
                    .split('_')
                    .join(' ')
                  if (
                    titleCase(selectedChallengeName) ===
                        challenge.firstChild?.textContent
                  ) {
                    const newChallenge = {
                      data: {
                        auth: dataAuth,
                        challenge: { name: selectedChallengeName }
                      }
                    }
                    dispatch({ type: 'CHALLENGE', data: newChallenge })
                  }
                })
          }
        })
    },
    [data, dataAuth, dispatch]
  )

  return (
    <ContainerList>
      <Category>
        <span>Challenges</span>
      </Category>
      <div id='listOfChallenges'>
        {data?.filter((challenge: any) => {
          return challenge.name !== 'requirements.txt'
        })
        .map((challenge, i) => (
          <div
            key={i}
            id={i.toString()}
            onClick={() => handleSelectChange(i)}
          >
            <ChallengeButton
              challengeName={challenge.name}
            />
          </div>
        ))}
      </div>
    </ContainerList>
  )
}

export default ChallengeList
