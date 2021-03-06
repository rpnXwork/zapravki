import React, { useEffect, useState } from 'react'
import {useMessage} from '../hooks/message.hook'
import {Timer} from '../components/Timer';
import {Loaderr} from '../components/Loaderr';
import {useHttp} from '../hooks/http.hook'
import {API, PORT} from '../api'


export const Changepassword = () => {
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const [mes, setMes] = useState(null)
    const [load, setLoad] = useState(0)
    const [email, setEmail] = useState()

    useEffect(() => {
        message(mes)
        message(error)
        clearError()
      }, [error, message, clearError, mes])

      useEffect(() => {
        window.M.updateTextFields()
      }, [])

    const emailHandler = event => {
        setEmail(event.target.value )
      }

      const keyHandler = (event) => {
        let key = event.key;
        if (key === "Enter"){
          sentEmail();
      }
    }

    const sentEmail = async () => {
        try { 
            const data = await request(`${API}${PORT}/changepassword/${email}`, 'POST')
            setMes(data.message)
            setLoad(true)
        }
        catch(e) {
            
        }
    }

    if (load){ return (
        <div className="afterregblock">    
            <div className="activayionpage-text">
                <Loaderr/>
                Проверьте почту 
                  <Timer timeout={10000} adress={'/login'}/> sec.
            </div>
        </div>
        )
}

    return (
        <div className="afterregblock">    
            <div className="activayionpage-text">
                <input
                 className="input-area"
                 type="text"
                 name="email"
                 placeholder="Введите Email"
                 value={email}
                 onChange={emailHandler}
                 onKeyPress={keyHandler}
                 required />
                Введи email и нажми <button className='pass-fog-btn' onClick={sentEmail}>Enter</button>
            </div>
        </div>
    )
}
