import React, { useCallback, useState } from 'react'

import { ContainerList, Category } from './styles'

import ChallengeButton from '../ChallengeButton'
import ContestButton from '../ContestButton'
import { useFetch } from 'src/hooks/useFetch'
import { useSelector, useDispatch } from 'react-redux'

interface Contest {
    tree: Challenge[];
}

interface Challenge {
    path: string;
}

const ContestList: React.FC = () => {
  const dispatch = useDispatch()
  const dataAuth = useSelector((state: any) => state.data.auth)
  const [contestsActive, setContestsActive] = useState<string[]>([])

  const { data } = useFetch<Contest>('/git/trees/bed6cd92797d728d25ec5b2ecca010f03196cbdb?recursive="true"')

  const handleSelectChange = useCallback(
    (contest: string) => {
      const newChallenge = {
        data: {
          auth: dataAuth,
          challenge: { name: `${contest}` }
        }
      }
      dispatch({ type: 'CHALLENGE', data: newChallenge })
    },
    [dataAuth, dispatch]
  )

  const handleVisibleContest = (contest: any) => {
    if (contestsActive.includes(contest)) {
      setContestsActive(contestsActive.filter((item) => item !== contest))
      const newChallenge = {
        data: {
          auth: dataAuth,
          challenge: { name: null }
        }
      }
      dispatch({ type: 'CHALLENGE', data: newChallenge })
    } else {
      setContestsActive((contestsActive) => [...contestsActive, contest])
      const newChallenge = {
        data: {
          auth: dataAuth,
          challenge: { name: `${contest}/` }
        }
      }
      dispatch({ type: 'CHALLENGE', data: newChallenge })
    }
  }

  return (
    <ContainerList>
      <Category>
        <span>Contests</span>
      </Category>
      <div id='listOfContests'>
        {data?.tree
                .filter((contest, i) => {
                  return (
                    contest.path.split('/').length === 1 ||
                        (contest.path.split('/').length === 2 && contest.path.split('/')[1] !== 'requirements.txt')
                  )
                })
                .map((contest, i) => (
                  <div key={i}>
                    {contest.path.split('/').length === 1 ? (
                      <div key={i} id={i.toString()} onClick={() => handleVisibleContest(contest.path.split('/')[0])}>
                        <ContestButton contestName={contest.path} size={data.tree.filter((elem) => {
                          console.log('elem', data.tree)
                          return elem.path.includes(contest.path) && elem.path.split('/').length === 3
                        }).length / 2}></ContestButton>
                      </div>
                    ) : contest.path.split('/').length === 2 && contestsActive.includes(contest.path.split('/')[0]) ? (
                      <div
                        key={i}
                        id={i.toString()}
                        className={contest.path.split('/')[0]}
                        onClick={() => handleSelectChange(contest.path)}>
                        <ChallengeButton challengeName={contest.path} />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
      </div>
    </ContainerList>
  )
}

export default ContestList
