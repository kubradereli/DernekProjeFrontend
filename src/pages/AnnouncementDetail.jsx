import React, { useState, useEffect } from 'react'
import { Card, Button, Image, Label } from 'semantic-ui-react'
import moment from "moment"
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import AnnouncementService from '../services/announcementService'

export default function AnnouncementDetail() {
    let { topic } = useParams();

    const [announcement, setAnnouncement] = useState({})

    useEffect(() => {
        let announcementService = new AnnouncementService()
        announcementService.getAnnouncementByTopic(topic).then(result => setAnnouncement(result.data.data))
    },[])

    return (
        <div>
            <Card fluid>
            {announcement.content}
                <Card.Content><b>{topic}</b></Card.Content>
                <Card.Content><Label>Açıklama :</Label>{announcement.content}</Card.Content>
                <Card.Content extra>{moment(announcement.validityDate).format("DD-MM-YYYY")}</Card.Content>
                <Image size='medium'src={announcement.image}/> 
            </Card>
            <Button type="submit" size="big" color="violet" as={NavLink} to="/announcementoperations">Duyuru Listesine Geri Dön</Button>
        </div>
    )
}
