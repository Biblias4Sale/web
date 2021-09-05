import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Catalogue } from '../components/Catalogue/Catalogue.jsx'
import { ProductDetails } from '../components/ProductDetails/ProductDetails'

import { Login } from '../components/Login/Login'

export const RouterWeb = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/product' component={Catalogue} />
      <Route exact path='/product/details/:id' component={ProductDetails} />
      <Route exact path='/login' component={Login} />
    </Switch>
  )
}
