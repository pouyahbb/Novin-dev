import React from 'react'
// Materail
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
// Other
import { withRouter } from 'react-router-dom'
// Style
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: '#1976d2',
		color: '#eaeaea',
	},
	title: {
		flexGrow: 1,
		cursor: "pointer"
	},
	loginIcon: {
		marginRight: '.5rem',
	},
}))
export const NavBar = ({ history }) => {
	const classes = useStyles()

	const handleClick = (e) => {
		console.log(e)
		if (e.target.innerText === 'LOGIN') {
			history.push('/login')
		} else {
			localStorage.setItem('token', '')
			history.push('/')
		}
	}
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						onClick={() => history.push('/')}
						variant='h6'
						className={classes.title}
					>
						Novin-do-test
					</Typography>
					<Button onClick={handleClick} color='inherit'>
						{localStorage.getItem('token') === '' ? (
							<LockOpenIcon className={classes.loginIcon} />
						) : (
							<ExitToAppIcon className={classes.loginIcon} />
						)}
						{localStorage.getItem('token') === '' ? 'Login' : 'Logout'}
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default withRouter(NavBar)
