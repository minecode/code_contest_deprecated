import React, { useState } from 'react'
import { useFetch } from 'src/hooks/useFetch'
import { useSelector } from 'react-redux'
import base64 from 'base-64'

import { Container, Role, User, Avatar } from './styles'

interface User {
	userId?: string;
	user: UserApi;
	score: number;
}

interface UserApi {
	userId: string;
	firstName: string;
	lastName: string;
	imageUrl: string;
}

const UserRow: React.FC<User> = ({ user, score }) => {
  return (
    <User>
      <Avatar src={base64.decode(user.imageUrl)} />
      <strong>{user.firstName} {user.lastName}</strong>
      <span>{score}</span>
    </User>
  )
}

const UserList: React.FC = () => {
  const contestChallenge = useSelector((state: any) => state.data)
  const challengeName = contestChallenge.challenge.name

  const { data: initialData } = useFetch<User[]>('http://localhost:4001/contests/global')
  const { data: userDataFetch } = useFetch<UserApi[]>('http://localhost:4001/contests/user')
  const { data } = useFetch<User[]>(`http://localhost:4001/contests/global/${challengeName}`)

  return (
    <Container>
      {challengeName ? <Role>{challengeName.split('/').join(' ').split('_').join(' ')}</Role> : <Role>Global</Role>}
      {data && data.length > 0 && userDataFetch ? (
        data.map(function (element, i) {
          const getUser: UserApi[] = userDataFetch.filter((element2) => {
            return element2.userId === element.userId
          })
          const user = getUser.pop()
          if (user) {
            return <UserRow key={i} user={user} score={element.score} />
          }
        })
      ) : initialData && userDataFetch && !challengeName ? (
        initialData.map(function (element, i) {
          const getUser: UserApi[] = userDataFetch.filter((element2) => {
            return element2.userId === element.userId
          })
          const user = getUser.pop()
          if (user) {
            return <UserRow key={i} user={user} score={element.score} />
          }
        })
      ) : (
        <></>
      )}
    </Container>
  )
}

export default UserList
