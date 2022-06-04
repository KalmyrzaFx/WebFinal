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
            <Image width={150} height={150} src={'https://login.kg/image/cache/catalog/new/Phones/Samsung/A32/a32-500x500.jpg'} />
            <div>Samsung</div>
            <div>{device.name}</div>
            <div>
                <div>{device.rating}</div>
                <Image width={10} height={10} src={'https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png'}/>
            </div>
        </div>
    </div>
  )
}

export default DeviceItem