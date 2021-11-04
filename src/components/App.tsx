import Header from './Header'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import Favorites from './Favorites'
import './App.css'

function App () {

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
