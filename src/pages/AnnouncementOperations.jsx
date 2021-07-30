import React, { useState, useEffect } from 'react'
import { Input, Form, Button, Divider, Segment, TextArea, Table } from 'semantic-ui-react'
import AnnouncementService from '../services/announcementService'

export default function AnnouncementOperations() {

    const [announcements, setAnouncements] = useState([])

    useEffect(() => {
        let announcemetService = new AnnouncementService()
        announcemetService.getAnnouncements().then(result => setAnouncements(result.data.data))
    },[])

    return (
        <div>
            <Segment>
                <h2>YENİ DUYURU</h2>
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
                            <h4 style={{ textAlign: "left" }}>Resim:<Input /></h4>
                        </Form.Field>
                    </Form.Group>
                    <Button color='violet' type='submit'>EKLE</Button>
                </Form>
            </Segment>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center' colSpan='5'><h3>DUYURU LİSTESİ</h3></Table.HeaderCell>
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
                    {announcements.map((announcement) => (
                        <Table.Row key={announcement.id}>
                            <Table.Cell>{announcement.id}</Table.Cell>
                            <Table.Cell>{announcement.topic}</Table.Cell>
                            <Table.Cell>{announcement.validityDate}</Table.Cell>
                            <Table.Cell><Button color="green">Güncelle</Button></Table.Cell>
                            <Table.Cell><Button color="red">Sil</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
