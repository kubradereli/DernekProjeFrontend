import axios from 'axios'

export default class NewsService {
    getNews(){
        return axios.get("http://localhost:8080/api/news/getall")
    }

    addNews(news){
        return axios.post("http://localhost:8080/api/news/add", news)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/news/delete?id="+id)
    }
}