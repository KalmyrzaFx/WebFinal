import React, { useEffect, useState } from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

  return (
    <Container className="mt-3">
        <div className='deviceDetail'>
            <div>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                <h2>{device.name}</h2>
                <div>
                    <h3>{device.price} сом</h3>
                    <Button variant={'dark'}>Add to Basket</Button>
                </div>
            </div>
            <ul>
                <h3>Description</h3>
                {device.info.map(info => 
                <li key={info.id}>
                    {info.title}: {info.description}
                </li> )}
            </ul>
        </div>
    </Container>
  )
}

export default DevicePage