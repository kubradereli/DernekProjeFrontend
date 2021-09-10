import React, { useState, useEffect } from 'react'
import { Button, Table, Grid, Icon } from 'semantic-ui-react'
import AnnouncementService from '../services/announcementService'
import moment from 'moment'
import { Link, NavLink } from 'react-router-dom'

export default function AnnouncementOperations() {

    const [announcements, setAnouncements] = useState([])

    useEffect(() => {
        let announcemetService = new AnnouncementService()
        announcemetService.getAnnouncements().then(result => setAnouncements(result.data.data))
    }, [])

    let announcementService = new AnnouncementService()
    let announcementDelete = (id) => {
        announcementService.delete(id).then((result) => {
            alert("HABER SİLİNDİ")
            refresh()
        })
    }

    function refresh() {
        window.location.reload()
    }

    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={12}>
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
                                    <Table.HeaderCell>DETAY</Table.HeaderCell>
                                    <Table.HeaderCell>SİL</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {announcements.map((announcement) => (
                                    <Table.Row key={announcement.id}>
                                        <Table.Cell>{announcement.id}</Table.Cell>
                                        <Table.Cell>{announcement.topic}</Table.Cell>
                                        <Table.Cell>{moment(announcement.validityDate).format("DD-MM-YYYY")}</Table.Cell>
                                        <Table.Cell><Button color="green" as={Link} to={`/announcement/${announcement.topic}`}>Duyuru Detayı</Button></Table.Cell>
                                        <Table.Cell><Button color="red" onClick={() => announcementDelete(announcement.id)}>Sil</Button></Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button floated="right" color="violet" as={NavLink} to="/addannouncement" size="big" style={{ height: 125 }}>
                            <br /><br /><Icon name='plus' />Yeni Duyuru Oluştur
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}