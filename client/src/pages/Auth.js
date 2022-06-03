import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import '../style/Style.css';

const Auth = () => {
  return (
    <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
    >
        <Card style={{width: 800}}>
            <h2 className='m-auto'>Authorization</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    className='mt-4'
                    placeholder='Enter your email'
                />
                <Form.Control
                    className='mt-4'
                    placeholder='Enter password'
                />
                <Button
                    variant="dark" 
                    className="loginBtn">
                    Login
                </Button>
            </Form>
        </Card>
    </Container>
  )
}

export default Auth