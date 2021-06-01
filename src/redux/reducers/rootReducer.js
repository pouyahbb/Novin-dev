import { combineReducers } from 'redux'

import userDetailReducer from './userReducer'

const rootReducer = combineReducers({
	userDetail: userDetailReducer,
})

export default rootReducer
