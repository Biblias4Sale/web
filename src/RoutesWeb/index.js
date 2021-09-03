import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home/Home'
// import { CreateAccount } from '../components/CreateAccount/CreateAccount'
import Catalogue from '../components/Catalogue/Catalogue'
import { Login } from '../components/Login/Login'




export const RouterWeb = () => {
  return (
    <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/product' component={Catalogue}/>
      {/*<Route exact path='/login' component={Login} }
      {/*<Route exact path='/create' component={CreateAccount} /> */}
      <Route exact path='/login' component={Login}/>
    </Switch>
  )
}
