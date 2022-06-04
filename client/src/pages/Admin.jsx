import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
        <Button variant='dark' onClick={() => setTypeVisible(true)} >Add type</Button>
        <Button variant='dark' onClick={() => setBrandVisible(true)} className='mt-2'>Add brand</Button>
        <Button variant='dark' onClick={() => setDeviceVisible(true)} className='mt-2' >Add device</Button>
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
    </Container>
  )
}

export default Admin