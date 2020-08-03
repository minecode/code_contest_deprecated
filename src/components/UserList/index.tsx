import React from 'react'
import { useFetch } from 'src/hooks/useFetch'
import { useSelector } from 'react-redux'

import { Container, Role, User, Avatar } from './styles'

interface User {
	userId: string;
	score: number;
  }

const UserRow: React.FC<User> = ({ userId, score }) => {
  return (
    <User>
      <Avatar/>

      <strong>{userId}</strong>
	  <span>{score}</span>

    </User>
  )
}

const UserList: React.FC = () => {
  const contestChallenge = useSelector((state: any) => state.data)
  const challengeName = contestChallenge.challenge.name

  const { data: initialData } = useFetch<User[]>('http://localhost:4001/contests/global')
  const { data } = useFetch<User[]>(`http://localhost:4001/contests/global/${challengeName}`)

  return (
    <Container>
      { challengeName ? <Role>{challengeName.split('/').join(' ').split('_').join(' ')}</Role> : <Role>Global</Role> }
      { data && data.length > 0 ? data.map(function (element, i) {
        return <UserRow key={i} userId={element.userId} score={element.score}/>
      })
        : initialData ? initialData.map(function (element, i) {
          return <UserRow key={i} userId={element.userId} score={element.score}/>
        })
          : <></>
      }
    </Container>
  )
}

export default UserList
