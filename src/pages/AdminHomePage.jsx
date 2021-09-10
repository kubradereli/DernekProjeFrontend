import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon, Grid, Button, Divider } from 'semantic-ui-react'
import NewsService from '../services/newsService'
import AnnouncementsService from '../services/announcementService'

export default function AdminHomePage() {
    const [news, setNews] = useState([])
    const [announcement, setAnnouncements] = useState([])

    useEffect(() => {
        let newsService = new NewsService()
        let announcementsService = new AnnouncementsService()
        newsService.getNews().then(result => setNews(result.data.data))
        announcementsService.getAnnouncements().then(result => setAnnouncements(result.data.data))
    }, [])

    return (
        <div style={{ marginTop: 90 }}>
            <h1>ADMİN MENÜ</h1>
            <Divider/>
            <Grid centered style={{marginTop: 25 }}>
                <Card.Group itemsPerRow={2}>
                    <Card>
                        <Button as={NavLink} to="/newsoperations">
                            <Icon circular name='newspaper' size="huge" />
                        </Button>
                        <Card.Content>
                            <Card.Header>HABERLER</Card.Header>
                            <Card.Description>Yeni Haber Girişi</Card.Description>
                            <Card.Description>Haber Silme ve Güncelleme İşlemleri</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='newspaper' color='violet' />
                            {`${news.length} Haber`}
                        </Card.Content>
                    </Card>
                    <Card>
                        <Button as={NavLink} to="/announcementoperations">
                            <Icon circular name='announcement' size="huge" />
                        </Button>
                        <Card.Content>
                            <Card.Header>DUYURULAR</Card.Header>
                            <Card.Description>Yeni Duyuru Girişi</Card.Description>
                            <Card.Description>Duyuru Silme ve Güncelleme İşlemleri</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='announcement' color='violet' />
                            {`${announcement.length} Duyuru`}
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Grid>
        </div>
    )
}
