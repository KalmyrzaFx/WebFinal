import React, { useContext } from 'react'
import { Context } from '..';
import {Nav, Navbar, Button, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: "red"}} to={SHOP_ROUTE}>TechWorld</NavLink>
        {user.isAuth ?
            <Nav className=''>
                <Button variant="outline-light" >Admin panel</Button>
                <Button variant="outline-light" className='ms-2'>Login</Button>
            </Nav>
            :
            <Nav className='ms-auto' style={{color: 'red'}}>
                <Button variant="light" onClick={() => user.setIsAuth(true)}>Authorization</Button>
            </Nav>
        }
      </Container>
    </Navbar>
  )
})

export default NavBar;