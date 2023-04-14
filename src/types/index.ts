export type categoryAttributes = {
    label: string,
    createdAd: string
}

export type category = {
    id: number,
    attributes: categoryAttributes
}
export type NewsImageData = {
    id:number,

}
export type NewsImageAttributes = {

}
export type newsItemAttributesData = {
    data:category
}
export type newsItemAttributes = {
    publishedAt: string,
    Header:string
    news_category:category,
    image: any
}
export type newsItem = {
    attributes: newsItemAttributes
    id: number,
    


   

}