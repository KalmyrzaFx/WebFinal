import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import '../style/Style.css';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)

  return (
    <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
    >
        <Card style={{width: 500,
        height: 350}}>
            <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className='mt-4 loginInp'
                    placeholder='Enter your email'
                />
                <Form.Control
                    className='mt-4 loginInp'
                    placeholder='Enter password'
                />
                <Row className="d-flex justify-content-between">
                    {isLogin ?
                        <div className='ms-5 mt-2'>
                            New here <NavLink to={REGISTRATION_ROUTE}>registrate</NavLink>
                        </div>
                        :
                        <div className='ms-5 mt-2'>
                            Have account <NavLink to={LOGIN_ROUTE}>login</NavLink>
                        </div>  
                    }   
                    <Button
                        variant="dark" 
                        className="loginBtn">
                        {isLogin ? 'Login' : 'Registrate'}
                    </Button>
                </Row>
            </Form>
        </Card>
    </Container>
  )
}

export default Auth