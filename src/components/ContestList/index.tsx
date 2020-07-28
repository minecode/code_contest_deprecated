import React, { useCallback } from 'react'

import { ContainerList, Category } from './styles'

import ChallengeButton from '../ChallengeButton'
import ContestButton from '../ContestButton'
import { useFetch } from 'src/hooks/useFetch'
import { titleCase } from '../Utils'
import { useSelector, useDispatch } from 'react-redux'

interface Contest {
  tree: Challenge []
}

interface Challenge {
  path: string;
}

const ContestList: React.FC = () => {
  const dispatch = useDispatch()
  const dataAuth = useSelector((state: any) => state.data.auth)

  const { data } = useFetch<Contest>('/git/trees/ba3a18d7f49f2296bfd47ee3db7682f8ed7cb8f1?recursive="true"')

  const handleSelectChange = useCallback(
    (id: number) => {
      const challenges = document.getElementById('listOfContests')?.childNodes
        challenges?.forEach((challenge) => {
          if (
            challenge.isEqualNode(
              document.getElementById(id.toString())
            )
          ) {
                data?.tree.forEach((selectedChallenge) => {
                  if (selectedChallenge.path.split('/').length === 2) {
                    const selectedContestName = selectedChallenge.path.split('/')[0].split('_').join(' ')
                    const selectedChallengeName = selectedChallenge.path.split('/')[1].split('_').join(' ')
                    if (
                      titleCase(selectedChallengeName) ===
                      challenge.firstChild?.textContent
                    ) {
                      const newChallenge = {
                        data: {
                          auth: dataAuth,
                          challenge: { name: `${selectedContestName}/${selectedChallengeName}` }
                        }
                      }
                      dispatch({ type: 'CHALLENGE', data: newChallenge })
                    }
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
        <span>Contests</span>
      </Category>
      <div id='listOfContests'>
        {data?.tree.filter((contest, i) => {
          return (contest.path.split('/').length === 1 || (contest.path.split('/').length === 2 && contest.path.split('/')[1] !== 'requirements.txt'))
        }).map((contest, i) => (
          <>
            {contest.path.split('/').length === 1 ? <ContestButton key={i} contestName={titleCase(contest.path)}></ContestButton>
              : contest.path.split('/').length === 2 ? <div
                key={i}
                id={i.toString()}
                onClick={() => handleSelectChange(i)}
              >
                <ChallengeButton
                  challengeName={contest.path.split('/')[1]}
                />
              </div> : <></>
            }
          </>
        ))}
      </div>
    </ContainerList>
  )
}

export default ContestList
