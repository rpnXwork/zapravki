import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = (session) => {

  const [id, setId] = useState(null)
  const [token, setToken] = useState(null)
  const [emailConfirmed, setEmailConfirmed] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [email, setEmail] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [gender, setGender] = useState(null)
  const [birthdate, setBirthdate] = useState(null)
  const [ready, setReady] = useState(false)
  const [role, setRole] = useState(null)
  const [ss, setSs] = useState(session)
  
  useEffect(() => {
    setSs(session)
  },[session])

  const login = useCallback((data,status = ss) => {
    setId(data.id) 
    setPhoneNumber(data.phoneNumber)
    setEmail(data.email)
    setFirstName(data.firstName)
    setLastName(data.lastName)
    setGender(data.gender)
    setBirthdate(data.birthdate)
    setToken(data.token)
    setEmailConfirmed(data.emailConfirmed)
    setRole(data.role)

    if (status) {
      sessionStorage.setItem(storageName, JSON.stringify({
      phoneNumber: data.phoneNumber,
      email: data.email, 
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      birthdate: data.birthdate,
      id: data.id,
      token: data.token,
      emailConfirmed: data.emailConfirmed,
      role: data.role
      }))
    } else {
      localStorage.setItem(storageName, JSON.stringify({
      phoneNumber: data.phoneNumber,
      email: data.email, 
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      birthdate: data.birthdate,
      id: data.id,
      token: data.token,
      emailConfirmed: data.emailConfirmed,
      role: data.role
      }))
    }
  }, [ss])

  const logout = useCallback(() => {
    setPhoneNumber(null)
    setEmail(null)
    setFirstName(null)
    setLastName(null)
    setGender(null)
    setBirthdate(null)
    setToken(null)
    setEmailConfirmed(null)
    setId(null)
    setRole(null)
    
    localStorage.removeItem(storageName)
    sessionStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    const timedata = JSON.parse(sessionStorage.getItem(storageName))
    if (data && data.token) {
      login(data)
    }
    if(timedata && timedata.token) {
      setSs(true)
      login(timedata, true)
    }
    setReady(true)
  }, [login])


  return {
    id,
    token,
    emailConfirmed,
    phoneNumber,
    email,
    firstName,
    lastName,
    gender,
    birthdate,
    login,
    logout,
    ready,
    role
  }
}
