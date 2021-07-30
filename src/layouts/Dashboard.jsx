import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NewsList from '../pages/NewsList'
import AnnouncementList from '../pages/AnnouncementList'
import AdminHomePage from '../pages/AdminHomePage'
import NewsOperations from '../pages/NewsOperations'
import AnnouncementOperations from '../pages/AnnouncementOperations'
import Login from '../pages/Login'

export default function Dashboard() {
    return (
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/news" component={NewsList}/>
            <Route path="/announcement" component={AnnouncementList}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={AdminHomePage}/>
            <Route path="/newsoperations" component={NewsOperations}/>
            <Route path="/announcementoperations" component={AnnouncementOperations}/>
        </div>
    )
}
