import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from '../../components'
import styles from './Dashboard.module.css'
import { fetchBasicIndex } from '../../services/'
import covid19Img from '../../images/covid-19.png'

class Dashboard extends Component {
    state = {
        basicIndex: {},
        country: ''
    }

    async componentDidMount() {
        const basicIndex = await fetchBasicIndex();
        this.setState({ basicIndex })
    }

    handleCountryChange = async country => { // TODO 总结 async 和 promise 的用法和区别
        const countryBasicIndex = await fetchBasicIndex(country)
        this.setState({ basicIndex: countryBasicIndex, country })
    }

    render() {
        const { basicIndex, country } = this.state

        return (
            <div className={styles.container}>
                <img className={styles.covid19Img} src={covid19Img} alt="COVID-19" />
                <Cards basicIndex={basicIndex} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart basicIndex={basicIndex} country={country} />
            </div>
        )
    }
}

export default Dashboard
