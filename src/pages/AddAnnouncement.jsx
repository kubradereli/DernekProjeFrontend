import React, { useState } from 'react'
import { Form, Button, Divider, Segment } from 'semantic-ui-react'
import AnnouncementService from '../services/announcementService'
import * as Yup from "yup"
import { Formik } from 'formik'
import { NavLink, useHistory } from 'react-router-dom'
import DernekTextInput from '../utilities/customFormControls/DernekTextInput'
import DernekTextArea from '../utilities/customFormControls/DernekTextArea'

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
        image: Yup.string().required("Resim eklemelisiniz.")
    })

    const history = useHistory()

    function backList(){
        history.push("/announcementoperations")
    }

    return (
        <div>
            <Segment>
                <h2>YENİ DUYURU</h2>
                <Divider />
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        announcementService.addAnnouncement(values.content, values.topic, values.image).then((result) => {
                            alert("DUYURU EKLENDİ.")
                            backList()
                        })
                    }
                    }
                >
                    {({ handleSubmit }) => (
                        <Form className="ui form" onSubmit={handleSubmit}>
                            <h4 style={{ textAlign: "left" }}>Konu:</h4>
                            <DernekTextInput
                                name="topic"
                                value={announcements.topic}
                                placeholder="Duyuru konusunu giriniz ..."
                            />
                            <h4 style={{ textAlign: "left" }}>İçerik:</h4>
                            <DernekTextArea
                                name="content"
                                value={announcements.content}
                                placeholder="Duyuru içeriğini giriniz ..."
                            />
                            <h4 style={{ textAlign: "left" }}>Geçerlilik Tarihi:</h4>
                            <DernekTextInput
                                name="validityDate"
                                value={announcements.validityDate}
                                placeholder="Geçerlilik tarihini giriniz ..."
                            />
                            <h4 style={{ textAlign: "left" }}>Duyuru Linki:</h4>
                            <DernekTextInput
                                name="image"
                                value={announcements.image}
                                placeholder="resim linki giriniz ..."
                            />
                            <Button type="submit" size="big" color="grey" as={NavLink} to="/announcementoperations">Duyuru Listesine Git</Button>
                            <Button type="submit" size="big" color="violet" onClick={handleSubmit}>EKLE</Button>
                        </Form>
                    )}
                </Formik>
            </Segment>
        </div>
    )
}
