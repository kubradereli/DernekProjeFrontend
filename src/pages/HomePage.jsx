import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon, Button, Grid } from 'semantic-ui-react'

export default function HomePage() {
    return (
        <div style={{marginTop:"150px"}}>
            <Grid centered padded>
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
                                22 Haber
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
                                14 Duyuru
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Grid>
        </div>
    )
}
