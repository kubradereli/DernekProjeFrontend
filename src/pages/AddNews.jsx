import React, { useState } from 'react'
import { Form, Button, Segment, Divider } from 'semantic-ui-react'
import * as Yup from "yup"
import { Formik } from 'formik'
import DernekTextInput from '../utilities/customFormControls/DernekTextInput'
import DernekTextArea from '../utilities/customFormControls/DernekTextArea'
import NewsService from '../services/newsService'
import { NavLink, useHistory } from 'react-router-dom'

export default function AddNews() {
    let newsService = new NewsService()

    const [news] = useState([])

    const initialValues = {
        topic: "",
        content: "",
        validityDate: "",
        newsLink: ""
    }

    const schema = Yup.object({
        topic: Yup.string().required("Konu alanı boş geçilemez."),
        content: Yup.string().required("İçerik alanı boş geçilemez."),
        newsLink: Yup.string().required("Haber linki eklemelisiniz.")
    })

    const history = useHistory()

    function backList() {
        history.push("/newsoperations")
    }

    return (
        <div>
            <Segment>
                <h2>YENİ HABER</h2>
                <Divider />
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        newsService.addNews(values.content, values.topic, values.newsLink).then((result) => {
                            alert("HABER EKLENDİ.")
                            backList()
                        })
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form className="ui form" onSubmit={handleSubmit}>
                            <h4 style={{ textAlign: "left" }}>Konu:</h4>
                            <DernekTextInput
                                name="topic"
                                value={news.topic}
                                placeholder="Haber konusunu giriniz ..."
                            />
                            <h4 style={{ textAlign: "left" }}>İçerik:</h4>
                            <DernekTextArea
                                name="content"
                                value={news.content}
                                placeholder="Haber içeriğini giriniz ..."
                            />
                            <h4 style={{ textAlign: "left" }}>Geçerlilik Tarihi:</h4>
                            <DernekTextInput
                                name="validityDate"
                                value={news.validityDate}
                                placeholder="Geçerlilik tarihini giriniz ..."
                            />
                            <h4 style={{ textAlign: "left" }}>Haber Linki:</h4>
                            <DernekTextInput
                                name="newsLink"
                                value={news.newsLink}
                                placeholder="Haber linkini giriniz ..."
                            />
                            <Button type="submit" size="big" color="grey" as={NavLink} to="/newsoperations">Haber Listesine Git</Button>
                            <Button type="submit" size="big" color="violet" onClick={handleSubmit}>EKLE</Button>
                        </Form>
                    )}
                </Formik>
            </Segment>
        </div>
    )
}