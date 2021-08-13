import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Segment, Grid, Divider, Icon, GridColumn } from 'semantic-ui-react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import DernekTextInput from '../utilities/customFormControls/DernekTextInput'

export default function Login() {

    const initialValues = { userName: "", password: "" }

    const schema = Yup.object({
        userName: Yup.string().required("Lütfen kullanıcı adı giriniz !"),
        password: Yup.string().required("Lütfen şifre giriniz !")
    })

    return (
        <div>
            <Grid>
                <GridColumn floated='centered' width={8} style={{ maxWidth: 400 }}>
                    <Segment>
                        <h2>Admin Girişi</h2>
                        <Icon name='user' circular size="big" color='violet' />
                        <Divider />
                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            <Form className="ui form">
                                <DernekTextInput name="userName" placeholder="Kullanıcı adı giriniz ..." />
                                <DernekTextInput name="password" type="password" placeholder="Şifre giriniz ..." />
                                <Button animated size="big" color="violet" type="submit" as={NavLink} to="/admin">
                                    <Button.Content visible>GİRİŞ YAP</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </Form>
                        </Formik>
                    </Segment>
                </GridColumn>
            </Grid>
        </div>
    )
}
