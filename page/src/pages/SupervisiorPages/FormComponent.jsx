import React, { useState } from 'react';
import PieChartComponent from './PieChartComponent'; // Adjust the path as necessary

const FormComponent = () => {
  const [collectingLiters, setcollectingLiters] = useState(80); // Example data
  const [spaceLiters, setSpaceLiters] = useState(20); // Example data
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const formStyles = {
   
    
  };

  return (
    <div >
     
      
      <PieChartComponent collectingLiters={collectingLiters} spaceLiters={spaceLiters} />
    </div>
  );
};

export default FormComponent;
