import { createStore } from 'redux'

const INITIAL_STATE = {
  data: {
    auth: {
      authenticated: false,
      user: {
        id: null,
        name: null,
        surname: null,
        image: null
      },
      token: null
    },
    challenge: {
      name: null
    }
  }
}

function authenticated (state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return action.data
    case 'CHALLENGE':
      return action.data
    default:
      return INITIAL_STATE
  }
}

const store = createStore(authenticated)

export default store
