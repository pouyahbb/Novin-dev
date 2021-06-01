import React, { useEffect, useState } from 'react'
// Material
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
// Other
import axios from 'axios'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userDetail } from './../../redux/actions/index'
import CardComponent from '../Card/Card'

const Root = styled.div`
	margin-top: 5rem;
	display: flex;
	justify-content: center;
	width: 98%;
`

export const UserList = ({ history, userDetail }) => {
	const [values, setValues] = useState({
		loading: false,
		users: [],
	})
	const handleDetailClick = (user) => {
		setValues((prevState) => {
			return {
				...prevState,
				loading: true,
			}
		})
		axios
			.get(`https://reqres.in/api/users/${user.id}`)
			.then(({ data }) => {
				setValues((prevState) => {
					return {
						...prevState,
						loading: false,
					}
				})
				userDetail(data.data)
				history.push(`/${user.id}/detail`)
			})
			.catch((err) => {
				setValues((prevState) => {
					return {
						...prevState,
						loading: false,
					}
				})
			})
	}
	useEffect(() => {
		setValues((prevState) => {
			return {
				...prevState,
				loading: true,
			}
		})
		axios
			.get('https://reqres.in/api/users?page=2')
			.then(({ data }) => {
				setValues((prevState) => {
					return {
						...prevState,
						loading: false,
						users: data.data,
					}
				})
			})
			.catch((err) => {
				setValues((prevState) => {
					return {
						...prevState,
						loading: false,
					}
				})
			})
	}, [])
	const renderList = () => {
		return values.users.map((user) => {
			return (
				<Grid key={user.id} item>
					<CardComponent
						email={user.email}
						firstName={user.first_name}
						lastName={user.last_name}
						avatar={user.avatar}
						haveButton={true}
						buttonText='Detail'
						buttonClickHandler={() => handleDetailClick(user)}
						showLastName={false}
					/>
				</Grid>
			)
		})
	}
	return (
		<Root>
			{values.loading ? (
				<CircularProgress />
			) : (
				<Grid container justify='center' spacing={4}>
					{renderList()}
				</Grid>
			)}
		</Root>
	)
}

export default connect(null, { userDetail })(withRouter(UserList))
