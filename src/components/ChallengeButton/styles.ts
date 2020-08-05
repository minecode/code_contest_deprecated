import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'
import { Check } from 'styled-icons/material'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  padding: 0 0 0 20px;

  > div {
    display: flex;  
    justify-content: space-between;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`

export const CheckIcon = styled(Check)`
  width: 21px;
  height: 21px;
  color: var(--green);
`
