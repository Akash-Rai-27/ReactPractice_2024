
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


function TableList() {

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
    
    const filterData = (data, filter) => {
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
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(filterData(data, filter));
    }, [filter]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Left Side Text</div>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="thisYear">This Year</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Source IP</th>
            <th>Source</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.sourceip}</td>
              <td>{item.source}</td>
              <td>{new Date(item.Time).toLocaleString()}</td>
              <td>{item.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <AnalyticChart filter={filter} data={filteredData} /> */}
    </div>
  )
}

export default TableList