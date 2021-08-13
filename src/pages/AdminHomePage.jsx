import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon, Grid, Button } from 'semantic-ui-react'

export default function AdminHomePage() {
    return (
        <div style={{ marginTop: "150px" }}>
            <Grid centered>
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
                            22 Haber
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
                            14 Duyuru
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Grid>
        </div>
    )
}
