import '../style/Style.css';
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const {device} = useContext(Context)

  return (
    <div className='deviceDivCard'>
        {device.devices.map(device => 
           <DeviceItem key={device.id} device={device}/> )}
    </div>
  )
})

export default DeviceList