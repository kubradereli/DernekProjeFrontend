import axios from 'axios'

export default class NewsService {
    getNews(){
        return axios.get("http://localhost:8080/api/news/getall")
    }

    addNews(content,topic,newsLink){
        return axios.post("http://localhost:8080/api/news/add", {}, {
            params:{content:content, topic:topic, newsLink:newsLink}}).catch(err => console.log(err))
    }

    delete(id){
        return axios.post("http://localhost:8080/api/news/delete?id="+id)
    }

    getNewsByTopic(topic){
        return axios.get("http://localhost:8080/api/news/getByTopic?topic="+topic)
    }
}