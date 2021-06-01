import React, { useState, useEffect } from 'react'
// Other
import Fields from './../../components/Fields/Fields'
import makeRequest from './../../lib/axios'
import { withRouter } from 'react-router-dom'

export const Auth = ({ history }) => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		showPassword: false,
		loading: false,
		loginSuccess: true,
	})

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token !== '') {
			setValues((prevState) => {
				return {
					...prevState,
				}
			})
		} else {
			setValues((prevState) => {
				return {
					...prevState,
				}
			})
		}
	}, [])

	const loginClickHandler = (e) => {
		setValues((prevState) => {
			return {
				...prevState,
				loading: true,
			}
		})
		makeRequest
			.post('https://reqres.in/api/login', {
				email: values.email,
				password: values.password,
			})
			.then(({ data }) => {
				setValues((prevState) => {
					return {
						...prevState,
						loading: false,
						loginSuccess: true,
					}
				})
				localStorage.setItem('token', JSON.stringify(data.token))
				history.push('/')
			})
			.catch((err) => {
				setValues((prevState) => {
					return {
						...prevState,
						loading: false,
						loginSuccess: false,
					}
				})
			})
	}
	return (
		<div>
			<Fields
				loginClickHandler={loginClickHandler}
				values={values}
				setValues={setValues}
			/>
		</div>
	)
}

export default withRouter(Auth)
