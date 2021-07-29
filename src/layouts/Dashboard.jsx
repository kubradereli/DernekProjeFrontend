import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NewsList from '../pages/NewsList'
import AnnouncementList from '../pages/AnnouncementList'

export default function Dashboard() {
    return (
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/news" component={NewsList}/>
            <Route path="/announcement" component={AnnouncementList}/>
        </div>
    )
}
