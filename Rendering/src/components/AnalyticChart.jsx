import React,{useState ,useEffect} from 'react'
import {Bar} from "react-chartjs-2"
import {Chart as ChartJS } from 'chart.js/auto'

function AnalyticChart() {
    const data = [
        {
            id:1,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:2,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:3,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:4,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:5,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:6,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:7,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:8,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:9,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:10,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:11,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:12,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:13,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:14,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
        {
            id:15,
            sourceip:'172.31.8.48',
            source : 'Resume Parser',
            Time : '2024-07-18T19:39:16.926Z',
            Status: 'Success',
        },
    ]

    const generateLabels = (filter) => {
        let labels = [];
        switch (filter) {
          case 'today':
          case 'yesterday':
            labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
            break;
          case 'thisMonth':
          case 'lastMonth':
            labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
            break;
          case 'thisYear':
            labels = Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`);
            break;
          default:
            labels = [];
            break;
        }
        return labels;
      };
    
      const filterDataForChart = (data, filter) => {
        const now = new Date();
        let filteredData = [];
        let yesterday;
        let lastMonth;
        switch (filter) {
          case 'today':
            filteredData = data.filter(item => new Date(item.Time).toDateString() === now.toDateString());
            break;
          case 'yesterday':
            yesterday = new Date(now);
            yesterday.setDate(now.getDate() - 1);
            filteredData = data.filter(item => new Date(item.Time).toDateString() === yesterday.toDateString());
            break;
          case 'thisMonth':
            filteredData = data.filter(item => new Date(item.Time).getMonth() === now.getMonth() && new Date(item.Time).getFullYear() === now.getFullYear());
            break;
          case 'lastMonth':
            lastMonth = new Date(now);
            lastMonth.setMonth(now.getMonth() - 1);
            filteredData = data.filter(item => new Date(item.Time).getMonth() === lastMonth.getMonth() && new Date(item.Time).getFullYear() === lastMonth.getFullYear());
            break;
          case 'thisYear':
            filteredData = data.filter(item => new Date(item.Time).getFullYear() === now.getFullYear());
            break;
          default:
            filteredData = data;
            break;
        }
        return filteredData;
      };


      const [filter, setFilter] = useState('all');

      const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Source Count',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    });


    
      useEffect(() => {
        const filteredData = filterDataForChart(data, filter);
        const sources = [...new Set(filteredData.map(item => item.source))];
        const counts = sources.map(source => filteredData.filter(item => item.source === source).length);
        const labels = generateLabels(filter);
    
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Source Count',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      }, [filter]);
      
      const handleFilterChange = (e) => {
        setFilter(e.target.value);
      };
      
  return (
    <div>
    <select onChange={handleFilterChange}>
      <option value="all">All</option>
      <option value="today">Today</option>
      <option value="yesterday">Yesterday</option>
      <option value="thisMonth">This Month</option>
      <option value="lastMonth">Last Month</option>
      <option value="thisYear">This Year</option>
    </select>
    <Bar data={chartData} />
  </div>
  )
}

export default AnalyticChart