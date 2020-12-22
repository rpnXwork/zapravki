import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
  birthdate: null,
  id: null,
  role: null,
  emailConfirmed: null,
  phoneNumber: null,
  email: null,
  firstName: null,
  lastName: null,
  gender: null,
  token: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
  session: false
})
