import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom'
export function Menu(){
      
     return(
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-danger ">
          
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText1" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText1">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <Link className="navbar-brand ml-5" to="/homeone">Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="navbar-brand ml-5" to="/card">Software Programming</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="navbar-brand ml-5" to="/league">IMS</Link>
                  </li>     

                  
                </ul>
                
              </div>
            </nav>
             
        </>
     );
}