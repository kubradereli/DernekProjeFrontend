import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Button as={NavLink} to="/login" onClick={signIn} color="violet">Giriş Yap</Button>
        </div>
    )
}
