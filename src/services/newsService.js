import axios from 'axios'

export default class NewsService {
    getNews(){
        return axios.get("http://localhost:8080/api/news/getall")
    }
}