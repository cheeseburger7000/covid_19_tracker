import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from '../../components'
import styles from './Dashboard.module.css'
import { fetchBaseData } from '../../services/'

class Dashboard extends Component {
    async componentDidMount() {
        const data = await fetchBaseData();
        console.log(data)
    } 

    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default Dashboard
