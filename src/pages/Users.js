import React, { useEffect, useState } from 'react'
import {useMessage} from '../hooks/message.hook';
import {useHttp} from '../hooks/http.hook'
import {API, PORT} from '../api'
import './style/Users.css'
import {Tables} from './Table'
import {Loaderr} from '../components/Loaderr'
import { NavLink } from 'react-router-dom';

export default function Users() {
    const [date, setDate] = useState()
    const [mes, setMes] = useState(null)
    const {request, error, clearError} = useHttp()
    const [pages, setPages] = useState()
    const [currentPage, setCurrentPage] = useState()
    const [page, setPage] = useState(JSON.parse(localStorage.getItem('page')))
    const [pageArr, setPageArr] = useState()
    const [input, setInput] = useState(1)
    const [disable, setDisable] = useState(false)
    const message = useMessage()
    const arr = []

    useEffect(() => {
        for(let i = 1; i <=pages; i++ ){
            arr.push(i)
        }
        setPageArr(arr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pages])

    useEffect(() => {
        message(mes)
        message(error)
        setMes(null)
        clearError()
      }, [error, mes, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
      }, [])


    const getmoney = async (page = 1) => {
        try{
          const date = await request(`${API}${PORT}/get/${page}/users`, 'GET')
          setPages(date.pageAmount)
          setCurrentPage(date.currentPage)
          setDate(date.info)
        } catch(e){
        }  
    } 

    useEffect(() => {
        getmoney(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect(() => {
        if (page === null){
            getmoney(1)
            setPage(1)
            localStorage.setItem('page', 1)
        }
        if (page > pages){
            getmoney(1)
            setPage(1)
            localStorage.setItem('page', 1)
        }
        setDate()
        getmoney(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (date) {
        return(
            <div>
                <Tables props={date}/>
                <div className='page-pagination'>

                <div className='page-nums'>
                    {pageArr.map((key, i)=>(
                        key === 1 && key !== currentPage?<button key = {i} style={{cursor:'pointer'}} onClick={() => {
                            setPage(i+1)
                            localStorage.setItem('page', i+1)
                            setDate()
                        }} className='page-num'>{key}</button>:
                        key === 1 && key === currentPage?<button key = {i} style={{cursor:'pointer'}} className='page-num picked'>{key}</button>:
                        key === 2 && key !== currentPage?<button key = {i} style={{cursor:'pointer'}} onClick={() => {
                            setPage(i+1)
                            localStorage.setItem('page', i+1)
                            setDate()
                        }} className='page-num'>{key}</button>:
                        key === 2 && key === currentPage?<button key = {i} style={{cursor:'pointer'}} className='page-num picked'>{key}</button>:
                        currentPage===key?
                        <button key ={i} onClick={()=> {}} className='page-num picked'>{key}</button>:
                        key === currentPage - 3?<div key = {i}>...</div>:
                        key === currentPage + 3 && key !== pageArr.length -1 && key !== pageArr.length?<div key = {i}>...</div>:
                        key === pageArr.length -1 && key !== currentPage?<button key = {i} style={{cursor:'pointer'}} onClick={() => {
                            setPage(i+1)
                            localStorage.setItem('page', i+1)
                            setDate()
                        }} className='page-num'>{key}</button>:
                        key === pageArr.length -1 && key === currentPage?<button key = {i} style={{cursor:'pointer'}} className='page-num picked'>{key}erfl;</button>:
                        key === pageArr.length  && key !== currentPage?<button key = {i} style={{cursor:'pointer'}} onClick={() => {
                            setPage(i+1)
                            localStorage.setItem('page', i+1)
                            setDate()
                        }} className='page-num'>{key}</button>:
                        key === pageArr.length && key === currentPage?<button key ={i} style={{cursor:'pointer'}} className='page-num picked'>{key}erfr</button>:
                        key > currentPage - 3  &&  currentPage + 3 > key?
                        <button key ={i} style={{cursor:'pointer'}} onClick={() => {
                            setPage(i+1)
                            localStorage.setItem('page', i+1)
                            setDate()
                        }} className='page-num'>{key}</button>:<div key={i}></div>
                    ))}
                </div>
                <div>
                    <input value={input} type="number" onChange={(e)=>{setInput(e.target.value)}} className='page-input'/>
                    <button className='pagination-btn' disabled={disable} onClick={()=>{
                        if (input === undefined) {
                            setPage(1)
                            localStorage.setItem('page', 1)
                            setDate()
                        }
                        if (Number(input) <= 0) {
                            setMes("page can't be 0 or lower")
                        }
                        if (input === currentPage){
                            setMes(`You on ${input} page`)
                        }
                        if (input && input !== currentPage && input > 0){
                            if (input > pages) {
                                if (currentPage === pageArr.length) {
                                    setMes(`you already on last page`)
                                } else {
                                    setPage(pageArr.length)
                                    localStorage.setItem('page', pageArr.length)
                                    setDate()
                                }
                            } else {
                                setPage(input)
                                    localStorage.setItem('page', input)
                                    setDate()
                                    console.log('wefjow')
                            }
                        }
                        
                    }}>To</button>
                </div>
                </div>
            </div>
        )
    }

    return(
        <div className="afterregblock">
            <Loaderr/>
            <div
            className='pagination-btn'
            style={{cursor:'pointer'}} 
            onClick={()=>{
                 setPage(1)
                 localStorage.setItem('page', 1)
                 setDate()
            }}> go to 1</div>
        </div>
    )
}
