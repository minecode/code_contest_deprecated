import React, { useState } from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { Grid, Auth } from './styles';

import Challenge from '../Challenge';
import UserList from '../UserList';

const Layout: React.FC = () => {
	const [loggedIn, setLoggedIn] = useState<Boolean>(false);

	const login = (response: any) => {
		setLoggedIn(true);
	};

	const badResponseGoogle = (response: any) => {
		console.log(response);
	};

	const logout = () => {
		setLoggedIn(false);
	};

	return (
		<Grid>
			<Auth>
				{loggedIn ? (
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
			<Challenge loggedIn={loggedIn} />
			<UserList />
		</Grid>
	);
};

export default Layout;
