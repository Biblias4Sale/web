import axios from 'axios'
import { ApiURL } from './config/config'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts, getCategories, setSearchResult } from './redux/actions/productActions'
import { RouterWeb } from './RoutesWeb'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      // const response1 = await axios.get(`${ApiURL}/products`)
      dispatch(getProducts())
      const response2 = await axios.get(`${ApiURL}/categories`)
      dispatch(getCategories(response2.data))
    }
    dispatch(setSearchResult(false))
    fetchData()
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <RouterWeb />
      <Footer />
    </div>
  )
}

export default App
