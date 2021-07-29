import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Button onClick={signIn} color="violet">Giriş Yap</Button>
        </div>
    )
}
