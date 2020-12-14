import React, {useState, useEffect, Children} from 'react';
import {NavLink, useLocation ,useParams } from 'react-router-dom';
import {useMessage} from '../hooks/message.hook';
import {useHttp} from '../hooks/http.hook';
import jwt from 'jsonwebtoken';
import { Timer } from '../components/Timer';
import { Loaderr } from '../components/Loaderr';
import {API, PORT} from '../api'
import PhoneInput from 'react-phone-input-2'
import './style/React-telinput.css'
import './style/RegistrationPage.css'
import DatePicker from 'react-date-picker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye  } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash  } from '@fortawesome/free-solid-svg-icons'

import ReactCodeInput from 'react-verification-code-input';




export const RegistrationPage = () => {

    const message = useMessage()
    const [mes, setMes] = useState(null)
    const {loading, request, error, clearError} = useHttp()
    const [status, setStatus] = useState(false)
    const [passwordShow, setPasswordShow] = useState(false)
    const [date, setDate] = useState(new Date(2000, 0, 1))
    const [confirmation, setConfirmation] = useState(null)
    const [confirmstatus, setConfirmstatus] = useState(false)
    const [gender, setGender] = useState('Мужской')
    
    const [form, setForm] = useState({
        phoneNumber: null,
        email: "", 
        password: "",
        firstName: "",
        lastName: "", 
        gender: "male",
        birthdate: new Date(2000, 0, 1)
      })
    const [rpas, setRpas] = useState({
        repeatPassword: ""
    })

    let jtoken = jwt.sign(form, 'chargepoint', {algorithm: 'HS512'})
    let finaltoken = {token: jtoken}

      useEffect(() => {
        message(mes)
        message(error)
        setMes(null)
        clearError()
      }, [error, mes, message, clearError])

      useEffect(() => {
          if (gender === 'Мужской'){
            setForm({...form, gender: 'male' })
          } 
          if (gender === 'Жеснский') {
            setForm({...form, gender: 'female' })
          }
         
      }, [form, gender])

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
    
    const check = (email, password, repeatPassword, phoneNumber, firstName, lastName) => {
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
    if (!phoneNumber){
        setMes("Введите телефон")
        return false
    }
    if (phoneNumber.length < 12){
        setMes("Введенный телефон не коректен")
        return false
    }
    if (!firstName){
        setMes("Введите Имя")
        return false
    }
    if (firstName.length <= 3){
        setMes("Имя должно быть не меньше 3 Букв")
        return false
    }
    if (!lastName){
        setMes("Введите фамилию")
        return false
    }
    setMes(null)
    return true   
    }

    const reset = (event) => {
        event.preventDefault()
        setPasswordShow(false)
        setForm({
            phoneNumber: "",
            email: "",
            password: "", 
            firstName: "",
            lastName: "",
            gender: "",
            birthdate: ""
          })
    }

    const registrationHandler = async () => {
        if (check(
            form.email,
            form.password,
            rpas.repeatPassword,
            form.phoneNumber,
            form.firstName,
            form.lastName
            )){
                try {
                    const data = await request(`${API}${PORT}/register`, 'POST', finaltoken)
                        setStatus(true)
                        setMes(data.message)
                } catch (e) {
                    setStatus(true)
                    // setMes(e)
                }
          }
    }

    const formatDate = (data) => {
        setDate(data)
        let arr = String(data).split(" ")
        let year = arr[3]
        let day = arr[2]

        const mton = (m) => {

            if (m === "Jan") {
                return('01')

            } else if (m === "Feb") {
                return('02')
            }
            else if (m === "Mar") {
                return('03')
            }
            else if (m === "Apr") {
                return('04')
            }
            else if (m === "May") {
                return('05')
            }
            else if (m === "Jun") {
                return('06')
            }
            else if (m === "Jul") {
                return('07')
            }
            else if (m === "Aug") {
                return('08')
            }
            else if (m === "Sep") {
                return('09')
            }
            else if (m === "Oct") {
                return('10')
            }
            else if (m === "Nov") {
                return('11')
            }

            else if (m === "Feb") {
                return('11')
            }

            else if (m === "Dec") {
                return('12')
            }

        }

        let month = mton(arr[1])
        
        let findatate = `${year}-${month}-${day}` 
        console.log(findatate)

        setForm({...form,  "birthdate": findatate  })
    }

    const confirm = async () => {
        try {
        const data = await request(`${API}${PORT}/activate`, 'POST', {"code": confirmation})
            setMes(data.message)
            setConfirmstatus(true)
        } catch (e) {
            setConfirmstatus(false)
        }
    }

    if (status){
        return(
            <div className="afterregblock">
                <div className="afterregblock-tittle">Введите код из смс</div>
                <div><ReactCodeInput
                fields={4}
                type={'number'}
                onChange={(num)=>{setConfirmation(num)}}
                onComplete={confirm}
                /></div>
                {confirmstatus?
                <div className="afterregblock-text"> Ваш Телефон подтвержден, вы будете перенаправлены на станицу логиначерез <Timer  timeout={10000} adress={'/login'} /> секунд..</div>:
                <div></div>}
                <NavLink className="afterregblock-text" to='/'>Главная</NavLink>
                
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
                                <button className='showpassword-btn' onClick={()=>setPasswordShow(!passwordShow)}>
                                    <FontAwesomeIcon icon={passwordShow?faEye:faEyeSlash} size="lg"/>
                                </button>
                                <input
                                    className="input-area"
                                    type={passwordShow?"text":"password"}
                                    name="password"
                                    placeholder="Пароль"
                                    value={form.password}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="name is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name="firstName"
                                    placeholder="Введите Имя"
                                    value={form.firstName}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input wrap-data-input" data-validate="name is required">
                                <div className='wrap-data-input-text'>Ваш пол</div>
                                <select
                                    className="gender-input-area"
                                    name="gender"
                                    placeholder="Введите ваш Пол"
                                    value={gender}
                                    onChange={(e)=>{setGender(e.target.value)}}
                                    required
                                >
                                    <option>Мужской</option>
                                    <option>Жеснский</option>
                                </select>
                            </div>
                        </div>

                        <div className='column'>
                                <PhoneInput
                                    containerClass="wrap-input"
                                    inputClass="input-area"
                                    onlyCountries={['by','ru','ua']}
                                    country={'by'}
                                    value={form.phoneNumber}
                                    onChange={phoneNumber => setForm({...form,  "phoneNumber": phoneNumber })}
                                />
                                <span className="focus-input"></span>
                                
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
                                    name="lastName"
                                    placeholder="Фамилия"
                                    value={form.lastName}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input wrap-data-input" data-validate="Email is required">
                            <div className='wrap-data-input-text'>Дата рождения</div>
                            <DatePicker 
                                format={'dd-M-y'} 
                                value={date} 
                                onChange={(data) =>formatDate(data)} 
                                name="birthdate"
                                locale={'by-BY'}/>

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
