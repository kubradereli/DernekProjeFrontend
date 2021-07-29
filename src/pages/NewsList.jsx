import React, { useState, useEffect } from 'react'
import { Button, Table, Popup } from 'semantic-ui-react'
import NewsService from '../services/newsService'

export default function NewsList() {

    const [news, setNews] = useState([])

    useEffect(() => {
        let newsService = new NewsService()
        newsService.getNews().then(result => setNews(result.data))
    },[])

    return (
        <div>
            <Table striped color='violet'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center' colSpan='4'><h2>HABERLER</h2></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Konu</Table.HeaderCell>
                        <Table.HeaderCell>İçerik</Table.HeaderCell>
                        <Table.HeaderCell>Geçerlilik Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Haber Linki</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {news.map((news) => (
                        <Table.Row key={news.id}>
                            <Table.Cell>{news.topic}</Table.Cell>
                            <Table.Cell>
                                <Popup
                                    content={news.content}
                                    on='click'
                                    pinned
                                    wide
                                    inverted
                                    trigger={<Button inverted color='violet' content='Detay' />}
                                    position='bottom left'
                                />
                            </Table.Cell>
                            <Table.Cell>{news.validityDate}</Table.Cell>
                            <Table.Cell><a href={news.newsLink} target="_blank">{news.newsLink}</a></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
