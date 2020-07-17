import styled from 'styled-components'

export const Container = styled.div`
  grid-area: C;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 311px auto;
  grid-template-rows: 46px auto 150px;

  grid-template-areas:
    'CL CI'
    'CL CD'
    'CL DF';

  height: 100vh;
`
export const ContainerList = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`
export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`
