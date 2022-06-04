import '../style/Style.css';
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card} from 'react-bootstrap'
import { Context } from '..'

const BrandBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <div className="deviceDiv">
        {device.brands.map(brand => 
            <Card
                key={brand.id}
                style={{cursor: 'pointer'}}
                className="p-3 ms-2"
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'Light'}
            >
                {brand.name}
            </Card>)}
    </div>
  )
})

export default BrandBar