import React from 'react'
// Materail
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
// Other
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
// Style
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: '#1976d2',
		color: '#eaeaea',
	},
	title: {
		flexGrow: 1,
		cursor: 'pointer',
	},
	loginIcon: {
		marginRight: '.5rem',
	},
}))
const ToolBar = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`
const ToolBarLeft = styled.div`
	display: flex;
	align-items: center;
`
export const NavBar = ({ history, user }) => {
	const classes = useStyles()
	const handleBack = () => {
		history.goBack()
	}
	const handleClick = (e) => {
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
					<ToolBar>
						<ToolBarLeft>
							{history.location.pathname !== '/' && (
								<IconButton
									onClick={handleBack}
									aria-label='account of current user'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									color='inherit'
								>
									<ArrowBackIcon />
								</IconButton>
							)}
							<Typography
								onClick={() => history.push('/')}
								variant='h6'
								className={classes.title}
							>
								Novin-do-test
							</Typography>
						</ToolBarLeft>
						<div>
							<Button onClick={handleClick} color='inherit'>
								{localStorage.getItem('token') === '' ? (
									<LockOpenIcon className={classes.loginIcon} />
								) : (
									<ExitToAppIcon className={classes.loginIcon} />
								)}
								{localStorage.getItem('token') === '' ? 'Login' : 'Logout'}
							</Button>
						</div>
					</ToolBar>
				</Toolbar>
			</AppBar>
		</div>
	)
}

const mapStateToProps = (state) => {
	return { user: state.userDetail.userDetail }
}

export default connect(mapStateToProps)(withRouter(NavBar))
