import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {MarkerContext} from './context/MarkerContext'
import {Loaderr} from './components/Loaderr'
import Nav from './components/Nav';
import Footer from './components/Footer';
import {useState} from 'react';

function App() {

  const [markers, setMarkers] = useState()
  const [chargeid, setChargeid] = useState()
  const [session, setSession] = useState(false)
  const {id, token, emailConfirmed, phoneNumber, email, firstName, lastName, gender, birthdate, login, logout, ready} = useAuth(session)
  const isAuthenticated = !!token
  const routes = useRoutes({isAuthenticated,id})

  if (!ready) {
    return (
      <>
        <div className="afterregblock"><Loaderr /></div>
      </>)
  }

  return (
    <MarkerContext.Provider value = {[markers, setMarkers]} >
      <AuthContext.Provider value={{id, token, emailConfirmed, phoneNumber, email, firstName, lastName, gender, birthdate, login, logout, isAuthenticated, setChargeid ,chargeid,
      setSession
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
    </MarkerContext.Provider>
  )
}

export default App
// export {MarkerContext}
