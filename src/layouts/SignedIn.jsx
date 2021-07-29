import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Icon name='user' />
            <Dropdown pointing="top right" text="admin">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
