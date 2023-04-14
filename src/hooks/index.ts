export const formatDate = (date: string) => {
    const MONTS = ['января', 'февряля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    const currentDate = new Date(date)
    const day = currentDate.getDate()
    const month = MONTS[currentDate.getMonth()]
    const year = currentDate.getFullYear()
    return `${day} ${month} ${year}`

}