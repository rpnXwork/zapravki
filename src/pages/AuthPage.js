import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import {useLocation} from "react-router-dom"
import jwt from 'jsonwebtoken'
import M from 'materialize-css/dist/js/materialize.min.js'
import './style/AuthPage.css'
import {NavLink} from 'react-router-dom'
import {API, PORT} from '../api'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {request, error, clearError} = useHttp()
  const [passwordShow, setPasswordShow] = useState(false)
  const [mes, setMes] = useState(null)
  let loc = JSON.parse(localStorage.getItem("path"))
  const { pathname } = useLocation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const {session, setSession} = useContext(AuthContext)
  let emailtoken = jwt.sign({email: email, password: password }, 'chargepoint', {algorithm: 'HS512'})

  useEffect(() => {
    if (pathname === '/login'){
        window.scrollTo(0, 0);
    }

}, [pathname]);
  useEffect(() => {
    message(mes)
    message(error)
    setMes(null)
    clearError()
  }, [error, mes, message, clearError])

  useEffect(() => {
    if(email){
      if(email[0]==='+'){
        setPhoneNumber(email)
      }
    } else {
      setPhoneNumber()
    }

  }, [email])

  useEffect(() => {
    M.updateTextFields()
  }, [])

  const emailHandler = event => {
    setEmail(event.target.value )
  }
  const passwordHandler = event => {
    setPassword(event.target.value)
  }

  const Session = (e) => {
    setSession(e.target.checked)
  }

  const  validate = (email) => {
    // eslint-disable-next-line no-useless-escape
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const  phonevidate = (email) => {
    var re = /^((\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    return re.test(email);
  }


  const check = (email, password) => {
    
    if (phonevidate(email)) {
      setMes("Wrong Phone Number")
    }
    
    if (password.length < 8){
      setMes("Password low than 8 symbol")
      return false
    } 
    setMes(null)
    return true
    }

  const check1 = (email, password) => {
  
    if (validate(email)) {
      setMes("Wrong email")
    }
    if (password.length < 8){
      setMes("Password low than 8 symbol")
      return false
    } 
    setMes(null)
    return true
    }

  const keyHandler = (event) => {
      let key = event.key;
      if (key === "Enter"){
        loginHandler();
    }
  }

  const loginHandler = async () => {
    if (phoneNumber){
        if(check(email, password)){
          try {
            const data = await request(`${API}${PORT}/authbyphone`, 'POST', {token: jwt.sign({phoneNumber: phoneNumber.replace('+',''), password: password}, 'chargepoint', {algorithm: 'HS512'})})
            auth.login(data, session)
            }  catch (e) {
            }
        }
      } else {
        if(check1(email, password)){
        try {
          const data = await request(`${API}${PORT}/authbyemail`, 'POST', {token: emailtoken})
          auth.login(data)
          }  catch (e) {
          }
        
        }
      }
      
  }

  return (
    <div className="registratin">
        <div className="cont">
            <div className="wrap-login">
                <div className="login-form" >
                    <div className="login-form-title">
                    <NavLink to={loc?`${loc}`:'/'}><i className='login-form-tittle-btn large material-icons'>arrow_back</i></NavLink>&nbsp;&nbsp;Войти в Личный кабинет
                    </div>
                <div className="wrap-input" data-validate="Email is required">
                    <input
                        className="input-area"
                        type="text"
                        name="email"
                        placeholder="Введите Email или Номер телефона"
                        value={email}
                        onChange={emailHandler}
                        onKeyPress={keyHandler}
                        required
                    />
                    <div className="login-text-butn" >
                  Забыли пароль?
                  <NavLink className="registration-text" to='/passforgot'> Востановить </NavLink> 
                </div>
                    <span className="focus-input"></span>
                </div>
                
                <div className="wrap-input" data-validate="Password is required">
                    <button className='showpassword-btn-auth' onClick={()=>setPasswordShow(!passwordShow)}>
                      <FontAwesomeIcon icon={passwordShow?faEye:faEyeSlash} size="lg"/>
                    </button>
                    <input
                        className="input-area"
                        type={passwordShow?"text":"password"}
                        name="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={passwordHandler}
                        onKeyPress={keyHandler}
                        required
                    />
                    <span className="focus-input"></span>
                    <div className='enemy-pc' title="Данные пользоватебя удаляться после закрытия страницы или зактыия браузера">Чужой устройство
                    <input
                    style={{cursor:'pointer'}}
                    type='checkbox'
                    checked={session}
                    name="typefast"
                    onChange={Session}></input></div>
                </div>
                <div className="btns">
                    <button
                    type="submit"
                    placeholder="Login"
                    className="button-login pulse"
                    onClick={loginHandler}
                    onKeyPress={keyHandler}
                    >Войти
                    </button>
                  </div>
                <div className="login-text-butn">
                  Нету акаунта?
                  <NavLink className="registration-text" to='/registration'> Регистрация. </NavLink> page
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
