import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, LineElement, PointElement, Legend, CategoryScale, LinearScale, Filler } from 'chart.js'

ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

 
const Chart = () => {
 
    const [data, setData] = useState({
        labels: ["#1", "Attack No.1", "009-1", "Animal 1", "D-1 Devastator", "Flicker Love No.1", "Attack No.1 (1970)", "Junk Head 1", "Blue Seed 1.5", "Namida no Fushichou", "Shibuya Crossing", " Memory of Cloud.", "Train Station", "Rice Planting", "Namida no Sekai Senshuken", "Money Wars", "Namida no Kaiten Receive", "Iczer-1", "Pound no Fukuin", "Paradise"],
        datasets: [
            {
                data: [20924, 6188, 4401, 13547, 11891, 17477, 11673, 17134, 9717, 12659, 12526, 18439, 12419, 12415, 12660, 6836, 12577, 6296, 8162, 5868],
                backgroundColor: 'lightblue',
                label: 'Popularity',
                borderColor: 'black',
                tension: 0.3,
                fill: true
            }
        ]
    });

    return (
        <div style={{height: '700px', width: '100%'}}>
            <Line data={data}>
            </Line>
        </div>
    )
}

export default Chart