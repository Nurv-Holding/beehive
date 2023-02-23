import moment from "moment"


export const calcPercentage = (CurrentItem=0, total=0) => {
    return CurrentItem /(total / 100)
}

export const calcDate = (date) => {
    const initialDate = moment(new Date()).format('DD-MM-YYYY')
    const finalDate = moment(date).format('DD-MM-YYYY')

    const newInitialDate = moment(`${initialDate}`, 'DD-MM-YYYY');
    const newFinalDate = moment(`${finalDate}`, 'DD-MM-YYYY');

    return newFinalDate.diff(newInitialDate, 'days');
}

const host1 = process.env.REACT_APP_HOSTLOCAL
// const host2 = process.env.REACT_APP_HOSTPROD
// const host3 = process.env.REACT_APP_HOSTDEV

export const host = host1