import React from 'react'

import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'

import { Auth } from './styles'

const Authentication: React.FC = () => {
  const authentication = useSelector((state: any) => state.data.authenticated)
  const dispatch = useDispatch()

  const login = (response: any) => {
    const newState = {
      data: {
        authenticated: true,
        user: {
          id: response.googleId,
          name: response.profileObj.givenName,
          surname: response.profileObj.familyName,
          image: response.profileObj.ImageUrl
        },
        token: response.tokenId
      }
    }
    dispatch({ type: 'LOGIN', data: newState })
  }

  const badResponseGoogle = (response: any) => {
    console.log(response)
    dispatch({ type: 'BAD_RESPONSE', data: null })
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT', data: null })
  }

  return (
    <Auth>
      {authentication ? (
        <GoogleLogout
          clientId='156221636932-bvl7ocr3bhrkikgcqc99k4g1a1s0sla1.apps.googleusercontent.com'
          buttonText='Logout'
          onLogoutSuccess={logout}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId='156221636932-bvl7ocr3bhrkikgcqc99k4g1a1s0sla1.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={login}
          onFailure={badResponseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </Auth>
  )
}

export default Authentication
