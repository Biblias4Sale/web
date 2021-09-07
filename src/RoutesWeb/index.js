import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Catalogue } from '../components/Catalogue/Catalogue'
import Logout from '../components/Logout/Logout'

import { ProductDetails } from '../components/ProductDetails/ProductDetails'

export const RouterWeb = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/catalogo' component={Catalogue} />
      <Route exact path='/logout' component={Logout} />

      <Route exact path='/product/details/:id' component={ProductDetails} />
    </Switch>
  )
}
