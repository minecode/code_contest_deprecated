import styled from 'styled-components'

export const Container = styled.div`
  grid-area: LG;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  background-color: var(--tertiary);
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`
