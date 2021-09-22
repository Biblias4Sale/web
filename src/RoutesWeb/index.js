import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../components/Home/Home'
import Catalogue from '../components/Catalogue/Catalogue'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import UserPage from '../components/UserPage/UserPage'
import NotFound from '../components/Error/Error404'
import Cart from '../components/Cart/Cart'
import { Logout } from '../components/Session/LogOut/LogOut'
import SuccessLogin from '../components/Session/modules/Login/Google/SuccessLogin'
import FailureLogin from '../components/Session/modules/Login/Google/FailureLogin'

export const RouterWeb = () => {
  const logged = useSelector(state => state.logged)
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/logout' component={Logout} />
      <Route exact path='/catalogo' component={Catalogue} />
      <Route exact path='/product/details/:id' component={ProductDetails} />
      <Route exact path='/login/success' component={SuccessLogin} />
      <Route exact path='/login/failure' component={FailureLogin} />
      <Route exact path='/cart' component={Cart} />
      {logged
        ? <Route exact path='/micuenta' component={UserPage} />
        : <Route component={NotFound} />}
      <Route component={NotFound} />
    </Switch>
  )
}
