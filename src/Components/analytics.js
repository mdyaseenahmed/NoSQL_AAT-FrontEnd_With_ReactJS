import React, { useState, useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import Header from "./header";

const Analytics = () => {
    
    const [patients, setPatients] = useState(0);
    const [age, setAge] = useState(0);
    const [females, setFemales] = useState(0);
    const [males, setMales] = useState(0);

    useEffect(() => {
        fetch("http://localhost:6039/totalLungsCancer")
          .then(res => res.json())
          .then(response => {
            console.log(response)
            setPatients(response);
          })
          .catch(error => console.log(error));
      
      
          fetch("http://localhost:6039/ageGroup")
          .then(res => res.json())
          .then(response => {
            console.log(response)
            setAge(response);
          })
          .catch(error => console.log(error));
      
          fetch("http://localhost:6039/NumberOfmalesWithCancer")
          .then(res => res.json())
          .then(response => {
            console.log(response)
            setMales(response);
          })
          .catch(error => console.log(error));
      
      
          fetch("http://localhost:6039/NumberOfFemalesWithCancer")
          .then(res => res.json())
          .then(response => {
            console.log(response)
            setFemales(response);
          })
          .catch(error => console.log(error));
      
      }, []);

      const data = [
          {name: 'Total Patients',patients: patients},
        {name: 'Males', patients: males},
        {name: 'Female', patients: females},
        {name: 'Age > 20 & < 50',patients: age}
      ];

    return (
        <>
            <Header />
            <div className="container analytics-container">
                <h1 className="names"> Analytics on Lungs Cancer Dataset </h1>
                <ol className="list">
                    <li>Total Number of Patients with Cancer including Males & Females : <span className="danger">{patients}</span></li>    
                    <li>Number of Male Patients with Cancer : <span className="danger">{males}</span></li>    
                    <li>Number of Female Patients with Cancer : <span className="danger">{females}</span></li>    
                    <li>Number of Patients with Cancer whose Age &gt; than 20 and &lt; 50 : <span className="danger">{age}</span></li>    
                </ol>
                <br />
                <BarChart width={800} height={500} data={data} className="text-center container">
                    <Bar dataKey="patients" fill="purple" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart> 
            </div>
        </>
    )
}

export default Analytics;
