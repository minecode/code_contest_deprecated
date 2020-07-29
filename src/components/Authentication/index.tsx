import React from 'react'

import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'

import { Auth, BtnGoogle } from './styles'

const Authentication: React.FC = () => {
  const data = useSelector((state: any) => state.data)
  const authentication = data.auth.authenticated
  const dataChallenge = data.challenge

  const dispatch = useDispatch()

  const login = (response: any) => {
    const newAuth = {
      data: {
        auth: {
          authenticated: true,
          user: {
            id: response.googleId,
            name: response.profileObj.givenName,
            surname: response.profileObj.familyName,
            image: response.profileObj.imageUrl
          },
          token: response.tokenId
        },
        challenge: dataChallenge
      }
    }
    dispatch({ type: 'LOGIN', data: newAuth })
  }

  const badResponseGoogle = (response: any) => {
    console.log(response)
    dispatch({ type: 'BAD_RESPONSE', data: null })
  }

  const logout = () => {
    const newAuth = {
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
        challenge: dataChallenge
      }
    }
    dispatch({ type: 'LOGOUT', data: newAuth })
  }

  return (
    <Auth>
      {authentication ? (
        <GoogleLogout
          clientId='156221636932-bvl7ocr3bhrkikgcqc99k4g1a1s0sla1.apps.googleusercontent.com'
          buttonText='Logout'
          onLogoutSuccess={logout}
          className="BtnGoogle"
          render={renderProps => (
            <BtnGoogle onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</BtnGoogle>
          )}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId='156221636932-bvl7ocr3bhrkikgcqc99k4g1a1s0sla1.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={login}
          onFailure={badResponseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          render={renderProps => (
            <BtnGoogle onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign In w/ Google</BtnGoogle>
          )}
        />
      )}
    </Auth>
  )
}

export default Authentication
