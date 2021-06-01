import React from 'react'
// Other
import { connect } from 'react-redux'
import Card from './../lib/Card'
import styled from 'styled-components'

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 5rem auto;
`
export const UserDetail = ({ user }) => {
	return (
		<Root>
			<Card
				email={user.email}
				firstName={user.first_name}
				lastName={user.last_name}
				avatar={user.avatar}
				haveButton={false}
				showLastName={true}
			/>
		</Root>
	)
}

const mapStateToProps = (state) => {
	return { user: state.userDetail.userDetail }
}

export default connect(mapStateToProps)(UserDetail)
