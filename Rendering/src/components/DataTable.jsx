import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DataTable() {
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

  const filterData = (data, startDate, endDate) => {
    if (!startDate || !endDate) return data;
    return data.filter(item => new Date(item.Time) >= startDate && new Date(item.Time) <= endDate);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(filterData(data, startDate, endDate));
  }, [startDate, endDate]);

  const setDateRange = (range) => {
    const now = new Date();
    let start, end;
    switch (range) {
      case 'today':
        start = new Date(now.setHours(0, 0, 0, 0));
        end = new Date(now.setHours(23, 59, 59, 999));
        break;
      case 'yesterday':
        start = new Date(now.setDate(now.getDate() - 1));
        start.setHours(0, 0, 0, 0);
        end = new Date(now.setHours(23, 59, 59, 999));
        break;
      case 'thisMonth':
        start = new Date(now.getFullYear(), now.getMonth(), 1);
        end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        break;
      case 'lastMonth':
        start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
        break;
      case 'thisYear':
        start = new Date(now.getFullYear(), 0, 1);
        end = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
        break;
      default:
        start = null;
        end = null;
        break;
    }
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <div>
        <button onClick={() => setDateRange('today')}>Today</button>
        <button onClick={() => setDateRange('yesterday')}>Yesterday</button>
        <button onClick={() => setDateRange('thisMonth')}>This Month</button>
        <button onClick={() => setDateRange('lastMonth')}>Last Month</button>
        <button onClick={() => setDateRange('thisYear')}>This Year</button>
      </div>
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

export default DataTable;
