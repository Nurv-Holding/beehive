import moment from "moment"


export const calcPercentage = (item=null, total=null) => {
    console.log("item",item)
    console.log("total",total)
    return item /(total / 100)
}

export const calcDate = (date) => {
    const initialDate = moment(new Date()).format('DD-MM-YYYY')
    const finalDate = moment(date).format('DD-MM-YYYY')

    const newInitialDate = moment(`${initialDate}`, 'DD-MM-YYYY');
    const newFinalDate = moment(`${finalDate}`, 'DD-MM-YYYY');

    return newFinalDate.diff(newInitialDate, 'days');
}