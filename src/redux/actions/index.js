import { USER_DETAIL } from './actionTypes'
export const userDetail = (user) => {
	return {
		type: USER_DETAIL,
		payload: user,
	}
}