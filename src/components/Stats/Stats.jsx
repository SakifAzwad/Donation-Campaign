/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, Label,ResponsiveContainer } from 'recharts';

const COLORS = ['#00C49F','#FF444A'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    percent=parseFloat(percent)
    return (
      <text className=' text-2xl font-bold' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

const Stats = () => {
    const [localStorageItemCount, setLocalStorageItemCount] = useState(0);

    useEffect(() => {
        const storedData = localStorage.getItem('item');
        if (storedData) {
          const dataArray = JSON.parse(storedData);
          if (Array.isArray(dataArray)) {
            setLocalStorageItemCount(dataArray.length);
          } 
        }
      }, []);

      const data = [
  {name:"Your Donation", value: localStorageItemCount,color: '#00C49F'},
  {name:"Total Donation", value: 12-localStorageItemCount,color: '#FF444A'}
];
const CustomLegend = () => (
    <div className='md:flex lg:ml-48'>
        <div className='flex items-center'>
        <h1 className='mr-3 text-lg font-normal'>{data[0].name}</h1>
        <div className='mt-0.5 border w-24 h-3  inline-block bg-[#00C49F]'></div>
        </div>
        <div className='flex items-center md:ml-14'>
        <h1 className='mr-3 text-lg font-normal'>{data[1].name}</h1>
        <div className='mt-0.5 border w-24 h-3  inline-block bg-[#FF444A]'></div>
        </div>
    </div>
);

const [outerRadius, setOuterRadius] = useState(150); // Initial outerRadius value

useEffect(() => {
  // Calculate the outerRadius based on window.innerWidth or any other criteria
  const updateOuterRadius = () => {
    
    let newOuterRadius = window.innerWidth > 768 ? 180 : 150; // Example breakpoint and values
    if(window.innerWidth<=500)
    {
      newOuterRadius=120;
    }
    setOuterRadius(newOuterRadius);
  };

  // Add an event listener to update outerRadius on window resize
  window.addEventListener('resize', updateOuterRadius);

  // Initial call to set the outerRadius
  updateOuterRadius();

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('resize', updateOuterRadius);
  };
}, []);

  return (
    <div className=' mt-8' style={{ textAlign: 'center' }}> 
      <div className='md:ml-12 md:pl-12 ml-0 pl-0 lg:ml-60'>
      <ResponsiveContainer width="90%" height={500}>
      <PieChart className='md:mx-auto'>
        <Pie
          data={data}
          cx="40%"
          cy="50%"
          outerRadius={outerRadius}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
        <Legend iconSize={15} content={<CustomLegend />} />
      </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
