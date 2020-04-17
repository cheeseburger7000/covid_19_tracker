import axios from 'axios'

const COVID_19_URL = 'https://covid19.mathdro.id/api'

export const fetchBasicIndex = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(COVID_19_URL)
        const result = { confirmed, recovered, deaths, lastUpdate }
        return result
    } catch (err) {
        console.log(err)
    }
}