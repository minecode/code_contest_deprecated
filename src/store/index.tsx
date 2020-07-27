import { createStore } from 'redux'

const INITIAL_STATE = {
  data: {
    authenticated: false,
    user: {
      id: null,
      name: null,
      surname: null,
      image: null
    },
    token: null
  }
}

function authenticated (state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return INITIAL_STATE
    default:
      return INITIAL_STATE
  }
}

const store = createStore(authenticated)

export default store
