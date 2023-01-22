import React,{useState,useEffect} from 'react';
// import { Line } from "react-chartjs-2";
import { Bar,Line } from "react-chartjs-2";
import * as XLSX from 'xlsx';

export function Chart(){
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    async function fetchData() {
      // fetch the Excel file
      const response = await fetch('http://localhost:3000/data.xlsx');
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });

      // extract the data from the first sheet
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);

      // format the data for the chart
      const labels = sheetData.map(row => row.label);
      const dataPoints = sheetData.map(row => row.value);
      const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'My Line Chart',
            data: dataPoints,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      };

      setChartData(chartData);
    }

    fetchData();
  }, []);

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        title: { text: 'My Line Chart', display: true },
      }}
    />
  );
};
