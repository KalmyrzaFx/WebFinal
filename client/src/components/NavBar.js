import React, { useContext } from 'react'
import { Context } from '..';
import {Nav, Navbar, Button, Container} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import {observer} from 'mobx-react-lite'
import { Navigate } from 'react-router-dom';
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: "red"}} to={SHOP_ROUTE}>TechWorld</NavLink>
        {user.isAuth ?
            <Nav className=''>
                <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>Admin panel</Button>
                <Button variant="outline-light" className='ms-2' onClick={() => logOut()}>Logout</Button>
            </Nav>
            :
            <Nav className='ms-auto' style={{color: 'red'}}>
                <Button variant="light" onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
            </Nav>
        }
      </Container>
    </Navbar>
  )
})

export default NavBar;