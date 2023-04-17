import axios from "axios"

export const categoriesAPI = 'https://magnum.kz:1337/api/news-categories?locale=ru'
export const newsAPI = 'https://magnum.kz:1337/api/news?sort[0]=publishedAt%3Adesc&populate[news_category]=%2A&populate[shops]=%2A&populate[image]=%2A&populate[localizations]=%2A&populate[cities]=%2A&filters[cities][id][$in]=2&locale=ru'
export const API = 'https://magnum.kz:1337'

export const getAllNews = async () => {
    try {
        const res = await axios.get(newsAPI)
        return res.data.data
    } catch (e) {
        console.log(e);
        return

    }
}

export const getNewsByCategory = async (categoryId: number) => {
    try {
        const res = await axios.get(`https://magnum.kz:1337/api/news?sort[0]=publishedAt%3Adesc&populate[news_category]=%2A&populate[shops]=%2A&populate[image]=%2A&populate[localizations]=%2A&populate[cities]=%2A&filters[cities][id][$in]=2&filters[news_category][id][$in][0]=${categoryId}&locale=ru`)
        return res.data.data
    } catch (e) {
        console.log(e);

    }
}
export const getCategories = async () => {
    try {
        const res = await axios.get(categoriesAPI)
        return res.data.data
    } catch (e) {
        console.log(e);

    }
}

export const fetchNewsItem = async (newsId: number) => {
    try {
        const res = await axios.get(`https://magnum.kz:1337/api/news/${newsId}?populate%5Bnews_category%5D=%2A&populate%5Bshops%5D=%2A&populate%5Bimage%5D=%2A&populate%5Blocalizations%5D%5Bpopulate%5D%5Bimage%5D=%2A&locale=ru`)
        return res.data.data
    } catch (e) {
        console.log(e);

    }
}