import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Icon } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Icon name='user' />
            <Dropdown pointing="top right" text="admin">
                <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/admin" text="Admin Menü" icon="home" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
