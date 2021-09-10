import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Segment, Grid, Divider, Icon, GridColumn, Input, Form } from 'semantic-ui-react'

export default function Login() {

    const [admin, setAdmin] = useState("")
    const [password, setPassword] = useState("")

    let history = useHistory()

    const handleChangeAdmin = (e, { name, value }) => setAdmin(value)
    const handleChangePassword = (e, { password, value }) => setPassword(value)

    const addedAdmin = [{
        userName: "admin",
        password: "12345"
    }]

    const checkAdmin = () => {
        let index = addedAdmin.findIndex(au => au.userName == admin && au.password == password)
        if (index != -1) {
            history.push("/admin")
        } else {
            alert("Kullanıcı adı veya şifre yanlış")
        }
    }

    return (
        <div>
            <Grid>
                <GridColumn floated='centered' width={8} style={{ maxWidth: 400 }}>
                    <Segment>
                        <h2>Admin Girişi</h2>
                        <Icon name='user' circular size="big" color='violet' />
                        <Divider />
                        <Form size='large' onSubmit={checkAdmin}>
                                <Input
                                    fluid
                                    name="user"
                                    value={admin}
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Kullanıcı adını giriniz'
                                    onChange={handleChangeAdmin}
                                /><br/>
                                <Input
                                    fluid
                                    name="password"
                                    value={password}
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Şifre giriniz'
                                    type='password'
                                    onChange={handleChangePassword}
                                /><br/>
                                <Button animated size="big" color="violet" type="submit">
                                    <Button.Content visible>GİRİŞ YAP</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                        </Form>
                    </Segment>
                </GridColumn>
            </Grid>
        </div>
    )
}
