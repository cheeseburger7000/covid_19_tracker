import axios from 'axios'

const COVID_19_URL = 'https://covid19.mathdro.id/api'

export const fetchBasicIndex = async (country) => {
    let changeableUrl = COVID_19_URL
    if (country) {
        changeableUrl = `${changeableUrl}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)
        const result = { confirmed, recovered, deaths, lastUpdate }
        return result
    } catch (err) {
        console.log(err)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${COVID_19_URL}/daily`)
        const result = data.map(day => ({
            confirmed: day.confirmed.total, 
            recovered: day.recovered.total,
            deaths: day.deaths.total, 
            reportDate: day.reportDate
        }))
        return result
    } catch (err) {
        console.log(err)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${COVID_19_URL}/countries`)
        const result = countries.map(country => country.name)
        return result
    } catch (err) {
        console.log(err)
    }
}