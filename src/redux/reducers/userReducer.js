import { USER_DETAIL } from './../actions/actionTypes'

const INITIALSTATE = {
	userDetail: null,
}

const userDetailReducer = (state = INITIALSTATE, action) => {
	switch (action.type) {
		case USER_DETAIL:
			return { userDetail: action.payload }
		default:
			return state
	}
}

export default userDetailReducer
