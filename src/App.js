import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Loaderr} from './components/Loaderr'
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {

  const {token, login, logout, userId, ready, nickname, role} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes({isAuthenticated})

  if (!ready) {
    return <Loaderr />
  }

  return (

    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated, nickname, role
    }}>

      <Router>
        {/* { isAuthenticated } */}
        <div className="app">
          <Nav/>
          {routes}
          <Footer/>
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
