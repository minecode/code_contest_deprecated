import React from 'react';
import { useSelector } from 'react-redux';
import base64 from 'base-64';

import Authentication from '../Authentication';
import { Container, Avatar, UserInfo, Auth } from './styles';

const Navbar: React.FC = () => {
	const authentication = useSelector((state: any) => state.data.auth);
	return (
		<Container>
			{authentication.authenticated ? (
				<UserInfo>
					<span>Welcome, {authentication.user.name}!</span>
					<Avatar src={authentication.user.image} />
				</UserInfo>
			) : (
				<></>
			)}
			<Auth>
				<Authentication />
			</Auth>
		</Container>
	);
};

export default Navbar;
