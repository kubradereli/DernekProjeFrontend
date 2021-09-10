import React, { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'
import NewsService from '../services/newsService'
import moment from "moment"
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function NewsDetail() {

    let { topic } = useParams();

    const [news, setNews] = useState({})

    useEffect(() => {
        let newsService = new NewsService()
        newsService.getNewsByTopic(topic).then(result => setNews(result.data.data))
    },[])

    return (
        <div>
            <Card fluid>
                <Card.Content><b>{topic}</b></Card.Content>
                <Card.Content> {news.content} </Card.Content>
                <Card.Content extra>{moment(news.validityDate).format("DD-MM-YYYY")}</Card.Content>
                <Card.Content>{news.newsLink}</Card.Content>
            </Card>
            <Button type="submit" size="big" color="violet" as={NavLink} to="/newsoperations">Haber Listesine Geri Dön</Button>
        </div>
    )
}
