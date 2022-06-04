import React from 'react'
import { Button, Container } from 'react-bootstrap'

const DevicePage = () => {
  const device =  {id:5,name:"IpadPro",price:12000,rating:0,img:"6414db08-6279-4a9b-99fc-88a37ff06dd3.jpg",typeId:2,brandId:1}
  const description = [
      {id:1, title: 'Operating system', description: '32gb'}
  ]

  return (
    <Container className="mt-3">
        <div className='deviceDetail'>
            <div>
                <image width={300} height={300} src={device.img}/>
                <h2>{device.name}</h2>
                <div>
                    <h3>{device.price} сом</h3>
                    <Button variant={'dark'}>Add to Basket</Button>
                </div>
            </div>
            <ul>
                <h3>Description</h3>
                {description.map(info => 
                <li key={info.id}>
                    {info.title}: {info.description}
                </li> )}
            </ul>
        </div>
    </Container>
  )
}

export default DevicePage