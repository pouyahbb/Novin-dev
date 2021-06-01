import React from 'react'
// Material
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// Other
import { withRouter } from 'react-router-dom'
import UserList from './../UserList/UserList'
import styled from 'styled-components'

const useStyle = makeStyles({
	button: {
		marginTop: '2rem',
	},
})

const NotLoginRootDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 5rem auto;
	text-align: center;
`

export const Home = ({ history }) => {
	const classes = useStyle()

	const handleClick = () => {
		history.push('/login')
	}
	return (
		<div>
			{localStorage.getItem('token') === '' ? (
				<NotLoginRootDiv>
					<Typography variant='h5' component='h2'>
						You are not login yet.Please login to see users list
					</Typography>
					<Button
						className={classes.button}
						onClick={handleClick}
						variant='contained'
						color='primary'
					>
						Login
					</Button>
				</NotLoginRootDiv>
			) : (
				<UserList />
			)}
		</div>
	)
}

export default withRouter(Home)
