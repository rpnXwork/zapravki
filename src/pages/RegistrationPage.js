import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import {useMessage} from '../hooks/message.hook'
import {useHttp} from '../hooks/http.hook'
import jwt from 'jsonwebtoken'
import { Timer } from '../components/Timer';
import { Loaderr } from '../components/Loaderr';
import {API, PORT} from '../api'
import DatePicker from "react-datepicker";
import './style/RegistrationPage.css'
import "react-datepicker/dist/react-datepicker.css";

    


export const RegistrationPage = () => {
    const message = useMessage()
    const [mes, setMes] = useState(null)
    const {loading, request, error, clearError} = useHttp()
    const [status, setStatus] = useState(false)

    const [form, setForm] = useState({
        email: "", password: "", name: "", surname: "", phone: "+" + 375, date: new Date(2000, 0, 1, 0, 0 ,0, 0)
      })
    const [rpas, setRpas] = useState({
        repeatPassword: ""
    })

    let jtoken = jwt.sign(form, 'secret', {algorithm: 'HS512'})
    let finaltoken = {token: jtoken}

      useEffect(() => {
        message(mes)
        message(error)
        setMes(null)
        clearError()
      }, [error, mes, message, clearError])

      
    
      useEffect(() => {
        window.M.updateTextFields()
      }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const reppas = event => {
        setRpas({ ...rpas, [event.target.name]: event.target.value })
    }

    function validate(email) {
        // eslint-disable-next-line no-useless-escape
        let ema = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return ema.test(email);
      }
    // const passvalidate = (password) => {
    //     let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,99}$/
    //     return passw.test(password)
    // }
    
    const check = (email, password, repeatPassword, phone, name, surname) => {
    if (!email){
        setMes("Введите Email")
        return false
    }
    if (!validate(email)){
        setMes("Неверный формат Email")
        return false
    }
    if (!password){
        setMes("Введите пароль")
        return false
    }
    if (password.length < 8){
        setMes("Пароль должен быть не меньше 8 цифр")
        return false
    }
    // if (!passvalidate(password)){
    //     setMes("Password must contain at least one numericdigit,</br>one uppercase and one lowercase letter")
    //     return false
    // }
    if (!repeatPassword){
        setMes("Введите пароль повторно")
        return false
    }
    if (password !== repeatPassword){
        setMes("Повторный пароль не совпадаетс пародем")
        return false
    }
    if (!phone){
        setMes("Введите телефон")
        return false
    }
    if (phone.length !== 13){
        setMes("Введите телефон в формате +375ХХХХХХХХ")
        return false
    }
    if (!name){
        setMes("Введите Имя")
        return false
    }
    if (name.length <= 3){
        setMes("Имя должно быть не меньше 3 Букв")
        return false
    }
    if (!surname){
        setMes("Введите фамилию")
        return false
    }
    setMes(null)
    return true   
    }

    const reset = (event) => {
        event.preventDefault()
        setForm({
            email: "",
            password: "", 
            name: "",
            surname: "",
            phone: "",
          })
    }

    const registrationHandler = async () => {
        if (check(
            form.email,
            form.password,
            rpas.repeatPassword,
            form.nickname,
            form.name,
            form.surname
            )){
                try {
                    const data = await request(`${API}${PORT}/register`, 'POST', finaltoken)
                        setStatus(true)
                        setMes(data.message)
                } catch (e) {
                    setStatus(true)
                }
          }
    }

    if (status){
        return(
            <div className="afterregblock">
                <Loaderr/>
                <div>Проверьте почту!</div>
                <div>На главную через <Timer  timeout={5000} adress={'/'} /> секунд..</div>
                <NavLink to='/'>Главная</NavLink>
                
            </div>
        )
    }

    return (
        <>
        <div className="registratin">         
            <div className="cont">
                <div className="wrap-login">
                    <div className="login-form" >
                        <div className="login-form-title">
                        <NavLink  to='/login'><i className='login-form-tittle-btn large material-icons'>arrow_back</i></NavLink>
                            Регистрация нового пользователя
                        </div>
                    <div className='columns'>
                        <div className='column'>
                            <div className="wrap-input" data-validate="Email is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name="email"
                                    placeholder="Введите Email"
                                    value={form.email}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Password is required">
                                <input
                                    className="input-area"
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                    value={form.password}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Nickname is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name="name"
                                    placeholder="Введите Имя"
                                    value={form.name}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="wrap-input" data-validate="Email is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name="phone"
                                    placeholder="Телефон"
                                    value={form.phone}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Password is required">
                                <input
                                    className="input-area"
                                    type="password"
                                    name="repeatPassword"
                                    placeholder="Повторите Пароль"
                                    value={rpas.repeatPassword}
                                    onChange={reppas}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Email is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name="surname"
                                    placeholder="Фамилия"
                                    value={form.surname}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Email is required">
                            <DatePicker selected={form.date} onChange={ (data) => setForm({...form,  "date": data })} name="date" />

                                <span className="focus-input"></span>
                            </div>
                            
                        </div>
                       
                    </div>

                    <div className="btns">
                        <button
                            className="button-reset"
                            onClick={reset}
                            >
                            <i className="buttonimage Small material-icons">refresh</i> 
                        </button>
                        <button
                            className="button-login buttom-reg pulse"
                            onClick={registrationHandler}
                            disabled={loading}
                        >
                          Зарегестрироваться
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
