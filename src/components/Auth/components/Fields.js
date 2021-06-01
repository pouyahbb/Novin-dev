import React from 'react'
// Material
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import EmailIcon from '@material-ui/icons/Email'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

// Other
import styled from 'styled-components'
// Style
const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 5rem auto;
	border: 1px solid #333;
	border-radius: 5px;
	padding: 3rem;
	width: 50%;
`
const useStyles = makeStyles(() => ({
	button: {
		marginTop: '2rem',
	},
	fields: {
		marginBottom: '2rem',
	},
	loading: {
		color: '#eaeaea',
	},
}))

export const Fields = ({ setValues, values, loginClickHandler }) => {
	const classes = useStyles()

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setValues((prevState) => {
			return {
				...prevState,
				loginSuccess: true,
			}
		})
	}

	const handleChange = (e) => {
		const { value, name } = e.target
		setValues((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const handleClickShowPassword = () => {
		setValues((prevState) => {
			return {
				...prevState,
				showPassword: !prevState.showPassword,
			}
		})
	}
	return (
		<Form>
			{!values.loginSuccess && (
				<Snackbar
					open={!values.loginSuccess}
					autoHideDuration={6000}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				>
					<Alert onClose={handleClose} severity='error'>
						Invalid email or password.
					</Alert>
				</Snackbar>
			)}
			<TextField
				className={classes.fields}
				id='input-with-icon-textfield'
				label='Email'
				name='email'
				required
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<EmailIcon />
						</InputAdornment>
					),
				}}
			/>
			<FormControl required>
				<InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
				<Input
					type={values.showPassword ? 'text' : 'password'}
					value={values.password}
					name='password'
					onChange={handleChange}
					startAdornment={
						<InputAdornment position='start'>
							<LockIcon />
						</InputAdornment>
					}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
							>
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
			<Button
				className={classes.button}
				onClick={loginClickHandler}
				variant='contained'
				color='primary'
				disabled={values.password.length === 0 || values.email.length === 0}
			>
				{values.loading ? (
					<CircularProgress className={classes.loading} size={20} />
				) : (
					'Login'
				)}
			</Button>
		</Form>
	)
}

export default Fields
