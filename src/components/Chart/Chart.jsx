import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../services'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({ basicIndex: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const asyncFetchDailyData = async () => {
            const initialDailyData = await fetchDailyData()
            setDailyData(initialDailyData)
        }

        asyncFetchDailyData()
    }, []) // TODO [] componentDidMount

    const lineChart = (
        dailyData.length !== 0 ? <Line
            data={{
                labels: dailyData.map(day => day.reportDate),
                datasets: [{
                    data: dailyData.map(day => day.confirmed),
                    label: 'Infected',
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    fill: true,
                }, {
                    data: dailyData.map(day => day.deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                },
                ],
            }}
        /> : ''
    )

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart