import styled from 'styled-components'

// CI - Challenge Info
// CL - Challenge List
// CD - Challenge Description
// UI - User Info
// UL - User List

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 311px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    'C C UL'
    'C C UL'
    'C C UL';

  height: 100vh;
`
