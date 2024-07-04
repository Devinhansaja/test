import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { height } from '@mui/system';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ collectingLiters, spaceLiters }) => {
  const data = {
    labels: ['collecting Liters', 'Space Liters'],
    datasets: [
      {
        data: [collectingLiters, spaceLiters],
        backgroundColor: ['#00cccc', '#4D9DE0'],
        hoverBackgroundColor: ['#00cccc', '#4D9DE0'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          color: '#fff', // Legend text color
        },
      },
    },
  };

  return (
    <div style={styles.pieChartContainer}>
      <Pie data={data} options={options} />
     
    </div>

    
  );
};

const styles = {
  pieChartContainer: {
    width: '500px',
    marginLeft:'150px',
    marginTop:'130px',
    height: '500px',
    margin: '50px ',
   
    padding: '20px',
    background: '#1e1e1e', // Background color matching the image
    borderRadius: '50px',
   
  },
};

export default PieChartComponent;
