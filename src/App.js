import React from 'react'
// Materail
import muiTheme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import {
	ThemeProvider as MuiThemeProvider,
	StylesProvider,
} from '@material-ui/styles'
// React-router-dom
import {
	Switch,
	BrowserRouter as Router,
	Route,
	Redirect,
} from 'react-router-dom'
// Setup redux
import { Provider } from 'react-redux'
import store from './redux/store'
// Other
import Home from './pages/Home/Home'
import NavBar from './components/Navbar'
import Auth from './pages/Auth/Auth'
import UserDetail from './pages/UserDetail/UserDetail'

export const App = () => {
	const ProtectedRoutes = (component) => {
		return localStorage.getItem('token') !== '' ? (
			<Route
				path={component.path}
				exact={component.exact}
				component={component.component}
			/>
		) : (
			<Redirect to='/login' />
		)
	}
	return (
		<StylesProvider injectFirst>
			<MuiThemeProvider theme={muiTheme}>
				<SCThemeProvider theme={muiTheme}>
					<CssBaseline />
					<Provider store={store}>
						<Router>
							<NavBar />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/login' component={Auth} />
								<ProtectedRoutes
									path={`/:id/detail`}
									exact
									component={UserDetail}
								/>
								<Redirect to='/' />
							</Switch>
						</Router>
					</Provider>
				</SCThemeProvider>
			</MuiThemeProvider>
		</StylesProvider>
	)
}

export default App
