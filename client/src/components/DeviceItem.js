import React from 'react'
import { Card, Image } from 'react-bootstrap';
import '../style/Style.css';
import { DEVICE_ROUTE } from '../utils/consts';
import {useNavigate} from 'react-router-dom'

// import { Col } from 'react-bootstrap'


const DeviceItem = ({device}) => {
  const navigate = useNavigate()

  return (
    <div className='deviceItem' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
        <div className="itemCard">
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
            <div>{device.name}</div>
        </div>
    </div>
  )
}

export default DeviceItem