import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../Dashboard/Dashboard.css'
import { ComposedChart,Line,PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts";
import { Link } from "react-router-dom";
export function Spcourse(){
   
   const data_send = (a) =>{
    //   window.location.href="/"+a;
    alert(a)
   }

   const[batch,setBatch]=useState([])
   useEffect(()=>{
    // fetch("https://legendary-torrone-086b35.netlify.app/data.json")
    fetch("http://localhost:3000/data.json")
    .then(res=>res.json())
    .then(data=>setBatch(data))
   })
   
      return (
        <>
            <h1 className="text-center">KGM Overall SP Status</h1>
              <div className="container-fluid row">

                  <div className="col-lg-3">

                    <h6 className="text-center">Domain</h6>
                    
                        <PieChart width={300} height={300}>
                            <Pie
                                dataKey="Total"
                                startAngle={360}
                                endAngle={0}
                                data={batch}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label="domain"
                                onClick={(e)=> data_send(e.batch)}
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
