import styled from 'styled-components'

// CI - Challenge Info
// CL - Challenge List
// CD - Challenge Description
// UI - User Info
// UL - User List

export const Auth = styled.div`
	grid-area: LG;

	background-color: var(--primary);
`

export const Grid = styled.div`
	display: grid;

	grid-template-columns: auto 240px;
	grid-template-rows: 46px auto;

	grid-template-areas:
		'C LG'
		'C UL';

	height: 100vh;
`
