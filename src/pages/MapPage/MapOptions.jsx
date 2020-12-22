import React, { useEffect, useState }  from 'react';
import './MapOptions.css'

import work from './icons/work.png'
import build from './icons/build.png'
import service from './icons/service.png'
import alert from './icons/alert.png'
import connected from './icons/connected.png'
import reserved from './icons/reserved.png'
import busy from './icons/busy.png'

const MapOptions = ({updateData}) => {
    
    const [options, setOptions] = useState({
        statusfree: true,
        statusempty: false,   
        typefast: true,
        typeslow: true,
        // portCCS: true,
        Type2: true,
        // portCHAdeMO: true,
        J1772: true,
        // portGB: true,
        // portSocket220V: true,
    })

    const HandleChange = (e) => {
        setOptions({ ...options, [e.target.name]: e.target.checked })

    }

    useEffect(()=>{
        updateData(options)
    },[options, updateData])

    return (
        <div className='map-options-blocks'>
                <div className='mo-block'>
                    <div className='mo-block-header'>
                        Обозначения
                    </div>
                    <div className='mo-block-body'>
                        <div className='mo-block-body-text'><span><img src={work} alt="work" className='mo-block-image'/></span>Работает</div>
                        <div className='mo-block-body-text'><span><img src={busy} alt="work" className='mo-block-image'/></span>Занят</div>
                        <div className='mo-block-body-text'><span><img src={connected} alt="work" className='mo-block-image'/></span>Подключен</div>
                        <div className='mo-block-body-text'><span><img src={reserved} alt="work" className='mo-block-image'/></span>Зарезервирован</div>
                        <div className='mo-block-body-text'><span><img src={build} alt="work" className='mo-block-image'/></span>Строится</div>
                        <div className='mo-block-body-text'><span><img src={service} alt="work" className='mo-block-image'/></span>На Сервисе</div>
                        <div className='mo-block-body-text'><span><img src={alert} alt="work" className='mo-block-image'/></span>Авария</div>
                    </div>
                </div>
                <div className='mo-block'>
                    <div className='mo-block-header'>
                        Статус
                    </div>
                    <div className='mo-block-body'>
                        <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.statusfree} name="statusfree" onChange={HandleChange} type="checkbox"></input></span>Бесплатные</div>
                        <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.statusempty} name="statusempty" onChange={HandleChange} type="checkbox"></input></span>Только Свободные</div>
                    </div>
                </div>
                <div className='mo-block'>
                    <div className='mo-block-header'>
                        Тип
                    </div>
                    <div className='mo-block-body'>
                        <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.typefast} name="typefast" onChange={HandleChange} type="checkbox"></input></span>Скоростная</div>
                        <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.typeslow} name="typeslow" onChange={HandleChange} type="checkbox"></input></span>Обычная</div>
                    </div>
                </div>
                <div className='mo-block'>
                    <div className='mo-block-header'>
                        Порт
                    </div>
                    <div className='mo-block-body'>
                        {/* <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.portCCS} name="portCCS" onChange={HandleChange}  type="checkbox"></input></span>CCS</div> */}
                        <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.Type2} name="Type2" onChange={HandleChange}  type="checkbox"></input></span>Type2</div>
                        {/* <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.portCHAdeMO} name="portCHAdeMO" onChange={HandleChange}  type="checkbox"></input></span>CHAdeMO</div> */}
                        <div className='mo-block-body-text'><span><input className='mo-block-inbut'checked={options.J1772} name="J1772" onChange={HandleChange}  type="checkbox"></input></span>J1772</div>
                        {/* <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.portGB} name="portGB" onChange={HandleChange}  type="checkbox"></input></span>GB/T</div> */}
                        {/* <div className='mo-block-body-text'><span><input className='mo-block-inbut' checked={options.portSocket220V} name="portSocket220V" onChange={HandleChange}  type="checkbox"></input></span>Socket 220V</div> */}
  
                    </div>
                </div>
            </div>

    )
}


export default MapOptions