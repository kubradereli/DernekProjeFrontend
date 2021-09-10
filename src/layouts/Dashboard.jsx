import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NewsList from '../pages/NewsList'
import AnnouncementList from '../pages/AnnouncementList'
import AdminHomePage from '../pages/AdminHomePage'
import NewsOperations from '../pages/NewsOperations'
import AnnouncementOperations from '../pages/AnnouncementOperations'
import Login from '../pages/Login'
import AddNews from '../pages/AddNews'
import AddAnnouncement from '../pages/AddAnnouncement'
import NewsDetail from '../pages/NewsDetail'
import AnnouncementDetail from '../pages/AnnouncementDetail'

export default function Dashboard() {
    return (
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/admin" component={AdminHomePage}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/news" component={NewsList}/>
            <Route path="/newsoperations" component={NewsOperations}/>
            <Route path="/addnews" component={AddNews}/>
            <Route path="/news/:topic" component={NewsDetail}/>
            <Route exact path="/announcement" component={AnnouncementList}/>
            <Route path="/announcementoperations" component={AnnouncementOperations}/>
            <Route path="/addannouncement" component={AddAnnouncement}/>
            <Route path="/announcement/:topic" component={AnnouncementDetail}/>
        </div>
    )
}
