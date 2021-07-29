import React, { useState, useEffect } from 'react'
import { Divider, Item, Label } from 'semantic-ui-react'
import AnnouncementService from '../services/announcementService'
import resim from '../images/sky.jpg'

export default function AnnouncementList() {

    const [announcements, setAnouncements] = useState([])

    useEffect(() => {
        let announcemetService = new AnnouncementService()
        announcemetService.getAnnouncements().then(result => setAnouncements(result.data))
    },[])

    return (
        <div>
            <h2>DUYURULAR</h2>
            <Divider/>
            <Item.Group divided>
                {announcements.map((announcement) => (
                    <Item key={announcement.id}>
                        <Item.Image size='medium' src={resim}/>
                        <Item.Content>
                            <Item.Header>{announcement.topic}</Item.Header>
                            <Item.Meta>{announcement.validityDate}</Item.Meta>
                            <Item.Description>
                                <Label>Açıklama :</Label>
                                {announcement.content}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </div>
    )
}
