import React from 'react'

import { Grid } from './styles'

import Challenge from '../Challenge'
import UserList from '../UserList'
import Authentication from '../Authentication'

const Layout: React.FC = () => {
  return (
    <Grid>
      <Authentication />
      <Challenge />
      <UserList />
    </Grid>
  )
}

export default Layout
