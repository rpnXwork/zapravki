import React, {useContext, useEffect, useState} from 'react'
import './style/User.css'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import {API, PORT} from '../api'
import {useMessage} from '../hooks/message.hook'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faFemale, faMale, faTimesCircle  } from '@fortawesome/free-solid-svg-icons'

export default function User() {

    const {id, token, emailConfirmed, phoneNumber, email, firstName, lastName, gender, birthdate} = useContext(AuthContext)
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const storageName = 'userData'
    const [mes, setMes] = useState(null)
    const auth = useContext(AuthContext)
    const [newdata, setNewdata] = useState()
    const [money, setMoney] = useState()

    const data = JSON.parse(localStorage.getItem(storageName))

    useEffect(() => {
        message(mes)
        message(error)
        clearError()
      }, [error, message, clearError, mes])

      useEffect(() => {
        window.M.updateTextFields()
      }, [])

    const verifyemail = async () => {
        try{
            const data = await request(`${API}${PORT}/verify/${email}`, 'POST')
            if(data){

            }

        } catch(e){

        }  
    } 
    const getmoney = async () => {
        try{
            const data = await request(`${API}${PORT}/money/get/${id}`, 'GET')
            setMoney(data.message)
            setMes('money update')
        } catch(e){

        }  
    } 

    useEffect(() => {
        getmoney()
    }, [])

    return (
        <div className='afterregblock'>
           <div className='user-body'>
               <div className='user-row'>
                    <div className='user-point'>
                        <div className='user-tittle'>Имя:</div>
                        <div className='user-text'>{firstName}</div>
                    </div>
                    <div className='user-point'>
                        <div className='user-tittle'>Фамилия:</div>
                        <div className='user-text'>{lastName}</div>
                    </div>
                    <div className='user-point'>
                        <div className='user-tittle'>Телефон:</div>
                        <div className='user-text'>+{phoneNumber}</div>
                    </div>
                    <div className='user-point'>
                        <div className='user-tittle'>Текущий счет:</div>
                        <div className='user-text'> {money}</div>
                    </div>
               </div>
               <div className='user-row'>
                    <div className='user-point'>
                        <div className='user-tittle'>Email:</div>
                        <div className='user-text'>{email}</div>
                        <span 
                        title={emailConfirmed?"email confirmed":"email not confirmed"}
                        >
                        <FontAwesomeIcon
                        onClick={emailConfirmed?()=>{console.log('good')}:verifyemail}
                        className='email-confirmation'
                        alt='email-confirmation'
                        icon={emailConfirmed?faCheckCircle:faTimesCircle}
                        style={emailConfirmed?{color:"green"}:{color:"red"}}
                        size="lg"/>
                        </span>
                    </div>
                    <div className='user-point'>
                        <div className='user-tittle'>ID:</div>
                        <div className='user-text'>{id}</div>
                    </div>
                    <div className='user-point'>
                        <div className='user-tittle'>Пол:</div>
                        <div className='user-text'>
                            <FontAwesomeIcon
                            className='email-confirmation'
                            alt='email-confirmation'
                            icon={gender === "FEMALE"?faFemale:faMale}
                            style={gender === "FEMALE"?{color:"pink"}:{color:"blue"}}
                            size="lg"/>
                            {gender === "FEMALE"?"Женский":"Мужской"}

                        </div>
                    </div>
                    <div className='user-point'>
                        <div className='user-tittle'>Дата рождения:</div>
                        <div className='user-text'>{birthdate}</div>
                    </div>
               </div>
           </div>
        </div>
    )
}
