import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { CreateAccount } from '../components/CreateAccount/CreateAccount'
import { Login } from '../components/Login/Login'


export const RouterWeb = () => {
  return (
    <Switch>
       <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/create' component={CreateAccount} />
    </Switch>
  )
}