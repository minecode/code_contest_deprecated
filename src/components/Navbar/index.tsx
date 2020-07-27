import React from 'react'
import { useSelector } from 'react-redux'

import Authentication from '../Authentication'
import {
  Container,
  Avatar,
  UserInfo
} from './styles'

const Navbar: React.FC = () => {
  const authentication = useSelector((state: any) => state.data)

  return (
    <Container>
      <Authentication />
      {authentication.authenticated
        ? <UserInfo>
          <p>Welcome, {authentication.user.name}!</p>
          <Avatar/>
        </UserInfo> : <></>
      }
    </Container>
  )
}

export default Navbar
