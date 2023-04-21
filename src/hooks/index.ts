export const formatDate = (date: string) => {
    const MONTS = ['января', 'февряля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    const currentDate = new Date(date)
    const day = currentDate.getDate()
    const month = MONTS[currentDate.getMonth()]
    const year = currentDate.getFullYear()
    return `${day} ${month} ${year}`

}

export const formatLinksInString = (text:string) => {
    const arrayOfStrings:Array<string> = []
    const splittedString = text.split(' ')
    splittedString.forEach(str => {
        if(str.startsWith('[') && str.endsWith(')')){
            const label = str.substring(str.indexOf("[") + 1, str.indexOf("]"))
            const link = str.substring(str.indexOf("(") + 1, str.indexOf(")"));
            arrayOfStrings.push(`<a target="_blank" href='${link}'>${label}</a>`)
        }
        else{
            arrayOfStrings.push(str)
        }
    })
    return arrayOfStrings.join(' ')
    
}
interface IstringElement{
    text:string,
    type: string
}
export const formatText = (text: string) => {
    const textArray: Array<IstringElement> = []
    const splittedText = formatLinksInString(text.trim()).split('\n')
    splittedText.forEach((el: string) => {
        let currentEl:IstringElement = {text:'', type:''} 
        if (el === '') {
            currentEl.text = '\n'
            currentEl.type = 'space'
            textArray.push(currentEl)
        } else if (el.startsWith('**')) {
            currentEl.text = el.slice(2, el.length - 3)
            currentEl.type = 'bold'
            textArray.push(currentEl)
        } else if (el.startsWith('_') && el.endsWith("_")) {
            currentEl.text = el.slice(1, el.length - 2)
            currentEl.type = 'italic'
            textArray.push(currentEl)
        } else if (el.startsWith('!') && el.endsWith(")")) {
            currentEl.text = el.slice(9, el.length - 1)
            currentEl.type = 'image'
            textArray.push(currentEl)
        }else {
            currentEl.text = el
            currentEl.type = 'regular'
            textArray.push(currentEl)
        }
    })
    return textArray
}