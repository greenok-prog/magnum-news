export const formatDate = (date: string) => {
    const MONTS = ['января', 'февряля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    const currentDate = new Date(date)
    const day = currentDate.getDate()
    const month = MONTS[currentDate.getMonth()]
    const year = currentDate.getFullYear()
    return `${day} ${month} ${year}`

}

export const formatText = (text: string) => {
    const textArray: any = []
    const splittedText = text.trim().split('\n')
    splittedText.forEach(el => {
        if (el === '') {
            textArray.push({ type: 'space', text: '\n' })
        }
        if (el.startsWith('**')) {
            textArray.push({ type: 'bold', text: el.slice(2, el.length - 3) })
        } else if (el.startsWith('_') && el.endsWith("_")) {
            textArray.push({ type: 'italic', text: el.slice(1, el.length - 2) })
        } else if (el.startsWith('!') && el.endsWith(")")) {
            textArray.push({ type: 'image', text: el.slice(9, el.length - 1) })
        }
        else {
            textArray.push({ type: 'regular', text: el })
        }
    })

    return textArray
}