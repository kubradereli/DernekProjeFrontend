import React, { useState, useEffect } from 'react'
import { Button, Table, Icon, Grid } from 'semantic-ui-react'
import NewsService from '../services/newsService'
import moment from 'moment'
import { Link, NavLink } from 'react-router-dom'

export default function NewsOperations() {

    const [news, setNews] = useState([])

    useEffect(() => {
        let newsService = new NewsService()
        newsService.getNews().then(result => setNews(result.data.data))
    }, [])

    let newsService = new NewsService()
    let newsDelete = (id) => {
        newsService.delete(id).then((result)=> {
            alert("HABER SİLİNDİ")
            refresh()
        })
    }

    function refresh(){
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
                                    <Table.HeaderCell textAlign='center' colSpan='5'><h3>HABER LİSTESİ</h3></Table.HeaderCell>
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
                                {news.map((news) => (
                                    <Table.Row key={news.id}>
                                        <Table.Cell>{news.id}</Table.Cell>
                                        <Table.Cell>{news.topic}</Table.Cell>
                                        <Table.Cell>{moment(news.validityDate).format("DD-MM-YYYY")}</Table.Cell>
                                        <Table.Cell><Button color="green" as={Link} to={`/news/${news.topic}`}>Haber Detayı</Button></Table.Cell>
                                        <Table.Cell><Button color="red" onClick={() => newsDelete(news.id)}>Sil</Button></Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button floated="right" color="violet" as={NavLink} to="/addnews" size="big" style={{ height: 125 }}>
                            <br /><br /><Icon name='plus' />Yeni Haber Oluştur
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}