import axios from "axios"

export default class AnnouncementService{
    getAnnouncements(){
        return axios.get("http://localhost:8080/api/announcement/getall")
    }

    addAnnouncement(announcement){
        return axios.post("http://localhost:8080/api/announcement/add", announcement)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/announcement/delete?id="+id)
    }
}