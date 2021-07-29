import React from 'react'
import { Form, Button, Input, Segment, Grid, Divider, Icon } from 'semantic-ui-react'

export default function Login() {
    return (
        <div>
            <Grid>
                <Grid.Column floated='centered' width={8}>
                    <Segment>
                        <Form>
                            <Icon name='user circular' size="big" color='violet'></Icon>
                            <h2>Admin Girişi</h2>
                            <Divider />
                            <br/>
                            <Form.Field >
                                {/* <label><h4>Kullanıcı Adı</h4></label> */}
                                <Input icon='users' iconPosition='left' size='big' placeholder='Kullanı adı giriniz...'/>
                            </Form.Field>
                            <Form.Field>
                                {/* <label><h4>Şifre</h4></label> */}
                                <Input icon='key' iconPosition='left' size='big' placeholder='Şifre giriniz...' />
                            </Form.Field>
                            <Button size='big' color='violet' type='submit'>Giriş Yap</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}
