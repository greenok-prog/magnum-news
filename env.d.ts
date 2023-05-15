/// <reference types="vite/client" />

API_URL = https://magnum.kz:1337;
CATEGORIES_API = 'https://magnum.kz:1337/api/news-categories?locale=ru';
NEWS_API = 'https://magnum.kz:1337/api/news?sort[0]=publishedAt%3Adesc&populate[news_category]=%2A&populate[shops]=%2A&populate[image]=%2A&populate[localizations]=%2A&populate[cities]=%2A&filters[cities][id][$in]=2&locale=ru';

