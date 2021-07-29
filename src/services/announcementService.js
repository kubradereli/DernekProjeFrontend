import axios from "axios"

export default class AnnouncementService{
    getAnnouncements(){
        return axios.get("http://localhost:8080/api/announcement/getall")
    }
}