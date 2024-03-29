import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css'
import { ComposedChart,Line,PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts";
import { Link } from "react-router-dom";
export function Dashboard(){
   
   const data_send = (a) =>{
      window.location.href="/"+a;
   }

   const[batch,setBatch]=useState([])
   useEffect(()=>{
    // fetch("https://legendary-torrone-086b35.netlify.app/sample.json")
    fetch("http://localhost:3000/sample.json")
    .then(res=>res.json())
    .then(data=>setBatch(data))
   })
   
      const batchweb = [
        {batch:"SP-Batch-10", value:11, fill:"#EB548C"}
        
      ]
    
      const yaxis1 = [  
        {batch:"SP-Batch-10", value:6, fill:"#EB548C"},
        {batch:"SP-Batch-11", value:4, fill:"#DB4CB2"},
        {batch:"SP-Batch-12", value:2, fill:"#AF4BCE"},
        {batch:"WD-Batch-01", value:1, fill:"#7D3AC1"}
      ]
      const data = [
        {
          name: 'SP-08',
          name1: 'HTML',
          course_status: 'React',
          completion_status: 800,
          amt: 1400,
        },
        {
          name: 'SP-09',
          name1: 'CSS',
          course_status: 'React',
          completion_status: 967,
          amt: 1506,
        },
        {
          name: 'SP-10',
          name1: 'JavaScript',
          course_status: 'React',
          completion_status: 1098,
          amt: 989,
        },
        {
          name: 'SP-11',
          name1: 'Java',
          course_status: 'Java',
          completion_status: 1200,
          amt: 1228,
        },
        {
          name: 'SP-12',
          name1: 'MySQL',
          course_status: 'CSS',
          completion_status: 1108,
          amt: 1100,
        },
        {
          name: 'WD-01',
          name1: 'React',
          course_status: 'CSS',
          completion_status: 680,
          amt: 1700,
        },
      ];
      
      function formatYAxis(value) {
        switch(value) {
          case 1:
            return "HTML";
          case 2:
            return "CSS";
          case 3:
            return "JavaScript";
          case 4:
            return "Java";
          case 5:
            return "Mysql";
          case 6:
            return "React Js";
          case 7:
            return "Node JS"
          default:
            return ""
        }
      }
      return (
        <>
            <h1 className="text-center">KGM Overall SP Status</h1>
              <div className="container-fluid row">

                  <div className="col-lg-3">

                    <h6 className="text-center">Domain</h6>
                    
                        <PieChart width={300} height={300}>
                            <Pie
                                dataKey="Domain Total"
                                startAngle={360}
                                endAngle={0}
                                data={batch}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label="domain"
                                onClick={(e)=> data_send(e.Domain)}
                            />
                            <Tooltip />
                        </PieChart>
                            
                    
               
                  </div>
                  <div className="col-lg-3">

                    <h6 className="text-center">Educational Qualification</h6>
                    
                        <PieChart width={300} height={300}>
                            <Pie
                                dataKey="Education"
                                startAngle={360}
                                endAngle={0}
                                data={batch}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label="domain"
                            />
                            <Tooltip />
                            
                        </PieChart>
                    
               
                  </div>
                  <div className="col-lg-3">

                    <h6 className="text-center">KAT Score</h6>
                    
                        <PieChart width={300} height={300}>
                            <Pie
                                dataKey="KAT Score"
                                startAngle={360}
                                endAngle={0}
                                data={batch}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label="domain"
                            />
                            <Tooltip />
                            
                        </PieChart>
                    
               
                  </div>
                  <div className="col-lg-3">

                    <h6 className="text-center">Communation</h6>
                    
                        <PieChart width={300} height={300}>
                            <Pie
                                dataKey="Communication"
                                startAngle={360}
                                endAngle={0}
                                data={batch}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label={"hu"}
                                cursor={"pointer"}
                               
                            />
                            <Tooltip />
                            
                        </PieChart>
                    
               
                  </div>
                  
              </div>
               
            
        </>
    );
}
