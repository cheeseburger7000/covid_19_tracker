import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from '../../components'
import styles from './Dashboard.module.css'
import { fetchBasicIndex } from '../../services/'

class Dashboard extends Component {
    state = {
        basicIndex: {}
    }

    async componentDidMount() {
        const basicIndex = await fetchBasicIndex();
        this.setState({ basicIndex })
    } 

    render() {
        const { basicIndex } = this.state

        return (
            <div className={styles.container}>
                <Cards basicIndex={basicIndex} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default Dashboard
