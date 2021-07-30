import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Dropdown, Menu, Container } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
    
    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed='top' size='large'>
                <Container>
                    <Menu.Item>
                        <h1 style={{color:"darkviolet"}}>DERNEK</h1>
                    </Menu.Item>
                    <Menu.Item as={Link} to="/">Anasayfa</Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item text='Dil'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Türkçe</Dropdown.Item>
                                <Dropdown.Item>İngilizce</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                    <Menu.Item>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}
