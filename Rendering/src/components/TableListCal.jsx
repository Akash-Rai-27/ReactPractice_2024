

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TableListCal() {
  const data = [
    { id: 1, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 2, sourceip: '172.31.8.48', source: 'AI Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 3, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 4, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 5, sourceip: '172.31.8.48', source: 'Normal Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 6, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 7, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 8, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 9, sourceip: '172.31.8.48', source: 'AI Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 10, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 11, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 12, sourceip: '172.31.8.48', source: 'Normal Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 13, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 14, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 15, sourceip: '172.31.8.48', source: 'AI Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
  ];

  const filterData = (data, filter, startDate, endDate) => {
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
      case 'custom':
        filteredData = data.filter(item => new Date(item.Time) >= startDate && new Date(item.Time) <= endDate);
        break;
      case 'all':
        filteredData = data;
        break;
      default:
        filteredData = data;
        break;
    }
    return filteredData;
  };

  const [filter, setFilter] = useState('all');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(filterData(data, filter, startDate, endDate));
  }, [filter, startDate, endDate]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value !== 'custom') {
      setStartDate(null);
      setEndDate(null);
    }
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
        <option value="custom">Custom Range</option>
      </select>
      {filter === 'custom' && (
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="End Date"
            minDate={startDate}
          />
        </div>
      )}
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
          {filteredData.map(item => (
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
    </div>
  );
}





export default TableListCal