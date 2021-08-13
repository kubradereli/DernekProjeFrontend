import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon, Button, Grid } from 'semantic-ui-react'
import NewsService from '../services/newsService'
import AnnouncementsService from '../services/announcementService'

export default function HomePage() {

    const [news, setNews] = useState([])
    const [announcement, setAnnouncements] = useState([])

    useEffect(() => {
        let newsService = new NewsService()
        let announcementsService = new AnnouncementsService()
        newsService.getNews().then(result => setNews(result.data.data))
        announcementsService.getAnnouncements().then(result => setAnnouncements(result.data.data))
    }, [])

    return (
        <div style={{ marginTop: "150px" }}>
            <Grid centered>
                <Card.Group itemsPerRow={2}>
                    <Card>
                        <Button as={NavLink} to="/news">
                            <Icon circular name='newspaper' size="huge" />
                        </Button>
                        <Card.Content>
                            <Card.Header>HABERLER</Card.Header>
                            <Card.Description>
                                Dernek haberlerine buradan ulaşabilirsiniz.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='newspaper' color='violet' />
                            {`${news.length} Haber`}
                        </Card.Content>
                    </Card>
                    <Card>
                        <Button as={NavLink} to="/announcement">
                            <Icon circular name='announcement' size="huge" />
                        </Button>
                        <Card.Content>
                            <Card.Header>DUYURULAR</Card.Header>
                            <Card.Description>
                                Dernek duyurularına buradan ulaşabilirsiniz.
                            </Card.Description>
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
