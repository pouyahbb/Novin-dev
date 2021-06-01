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
import Home from './components/Home/Home'
import NavBar from './components/Navbar'
import Auth from './components/Auth/Auth'
import UserDetail from './components/UserDetail/UserDetail'

export const App = () => {
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
								<Route exact path='/:id/detail' component={UserDetail} />
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
