import { Route, Switch } from 'react-router-dom'

import LoginForm from './components/LoginForm/LoginForm'
import Home from './components/Home/Home'

import NotFound from './components/NotFound/NotFound'

import './App.css'

const App = () => (
	<Switch>
		<Route exact path='/login' component={LoginForm} />
		<Route exact path='/' component={Home} />
		<Route component={NotFound} />
	</Switch>
)

export default App
