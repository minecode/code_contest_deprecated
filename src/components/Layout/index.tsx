import React from 'react'

import { Grid } from './styles'

import Challenge from '../Challenge'
import UserList from '../UserList'

const Layout: React.FC = () => {
  return (
    <Grid>
      <Challenge />
      <UserList />
    </Grid>
  )
}

export default Layout
