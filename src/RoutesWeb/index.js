import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Catalogue } from '../components/Catalogue/Catalogue'
import { ProductDetails } from '../components/ProductDetails/ProductDetails'
import { UserPage } from '../components/UserPage/UserPage'
import { NotFound } from '../components/Error/Error404'
import Cart from '../components/Cart/Cart'

export const RouterWeb = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/catalogo' component={Catalogue} />
      <Route exact path='/micuenta' component={UserPage} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/product/details/:id' component={ProductDetails} />

      <Route component={NotFound} />
    </Switch>
  )
}
