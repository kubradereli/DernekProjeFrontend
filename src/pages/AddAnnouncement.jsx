import React, { useState } from 'react'
import { Input, Form, Button, Divider, Segment, TextArea, FormField } from 'semantic-ui-react'
import AnnouncementService from '../services/announcementService'
import * as Yup from "yup"
import { Formik } from 'formik'
import { NavLink } from 'react-router-dom'

export default function AddAnnouncement() {
    let announcementService = new AnnouncementService()

    const [announcements] = useState([])

    const initialValues = {
        topic: "",
        content: "",
        validityDate: "",
        image: ""
    }

    const schema = Yup.object({
        topic: Yup.string().required("Konu alanı boş geçilemez."),
        content: Yup.string().required("İçerik alanı boş geçilemez."),
        //validityDate: Yup.date().required("Haber için geçerlilik tarihi eklemelisiniz."),
        image: Yup.string().required("Resim eklemelisiniz.")
    })

    return (
        <div>
            <Segment>
                <h2>YENİ DUYURU</h2>
                <Divider />
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        let anouncementInformation = {
                            topic: values.topic,
                            content: values.content,
                            validityDate: values.validityDate,
                            image: values.image
                        }
                        announcementService.addAnnouncement(anouncementInformation).then((result) => {
                            console.log(result.data.message)
                            console.log(anouncementInformation)
                        })
                    }
                    }
                >
                    {({ handleSubmit, handleChange }) => (
                        <Form className="ui form" color="black" onSubmit={handleSubmit}>
                            <FormField>
                                <h4 style={{ textAlign: "left" }}>Konu:</h4>
                                <Input name="topic" value={announcements.topic} onChange={handleChange} />
                            </FormField>
                            <FormField>
                                <h4 style={{ textAlign: "left" }}>İçerik:</h4>
                                <TextArea name="content" value={announcements.content} onChange={handleChange} />
                            </FormField>
                            <Form.Group widths='equal'>
                                <FormField>
                                    <h4 style={{ textAlign: "left" }}>Geçerlilik Tarihi:</h4>
                                    <Input name="validityDate" value={announcements.validityDate} onChange={handleChange} />
                                </FormField>
                                <FormField>
                                    <h4 style={{ textAlign: "left" }}>Resim:</h4>
                                    <Input name="image" value={announcements.image} onChange={handleChange} />
                                </FormField>
                            </Form.Group>
                            <Button type="submit" size="big" color="grey" as={NavLink} to="/announcementoperations">Duyuru Listesine Git</Button>
                            <Button type="submit" size="big" color='violet' onClick={handleSubmit}>EKLE</Button>
                        </Form>
                    )}
                </Formik>
            </Segment>
        </div>
    )
}
