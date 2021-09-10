import axios from "axios"

export default class AnnouncementService{
    getAnnouncements(){
        return axios.get("http://localhost:8080/api/announcement/getall")
    }

    addAnnouncement(content,topic,image){
        return axios.post("http://localhost:8080/api/announcement/add", {}, {
            params:{content:content, topic:topic, image:image}}).catch(err => console.log(err))
    }

    delete(id){
        return axios.post("http://localhost:8080/api/announcement/delete?id="+id)
    }
    
    getAnnouncementByTopic(topic){
        return axios.get("http://localhost:8080/api/announcement/getByTopic?topic="+topic)
    }
}