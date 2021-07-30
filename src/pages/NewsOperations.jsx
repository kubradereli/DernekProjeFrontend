import React, { useState, useEffect } from 'react'
import { Form, Button, Input, Segment, TextArea, Divider, Table } from 'semantic-ui-react'
import NewsService from '../services/newsService'

export default function AddNews() {

    const [news, setNews] = useState([])

    useEffect(() => {
        let newsService = new NewsService()
        newsService.getNews().then(result => setNews(result.data.data))
    }, [])

    return (
        <div>
            <Segment>
                <h2>YENİ HABER</h2>
                <Divider/>
                <Form color="black">
                    <Form.Field >
                        <h4 style={{ textAlign: "left" }}>Konu:<Input /></h4>
                    </Form.Field>
                    <Form.Field >
                        <h4 style={{ textAlign: "left" }}>İçerik:<TextArea /></h4>
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Field >
                            <h4 style={{ textAlign: "left" }}>Geçerlilik Tarihi:<Input /></h4>
                        </Form.Field>
                        <Form.Field >
                            <h4 style={{ textAlign: "left" }}>Haber Linki:<Input /></h4>
                        </Form.Field>
                    </Form.Group>
                    <Button color='violet' type='submit'>EKLE</Button>
                </Form>
            </Segment>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center' colSpan='5'><h3>HABER LİSTESİ</h3></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Konu</Table.HeaderCell>
                        <Table.HeaderCell>Geçerlilik Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>GÜNCELLE</Table.HeaderCell>
                        <Table.HeaderCell>SİL</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {news.map((news) => (
                        <Table.Row key={news.id}>
                            <Table.Cell>{news.id}</Table.Cell>
                            <Table.Cell>{news.topic}</Table.Cell>
                            <Table.Cell>{news.validityDate}</Table.Cell>
                            <Table.Cell><Button color="green">Güncelle</Button></Table.Cell>
                            <Table.Cell><Button color="red">Sil</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
