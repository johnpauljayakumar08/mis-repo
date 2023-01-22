import React from "react";
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export function Dashboard(){
      
     return(
        <>
           <nav class="navbar bgcolor  fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{height:"70px"}}
                    alt="Avatar" /></a>
                    <div class="offcanvas offcanvas-start bgcolor color" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
                            Student
                            </a>
                            <ul class="dropdown-menu" id="menu">
                            <li className="nav-item">
                                <a class="nav-link " href="#">Software Programing</a>
                               
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">IMS</a>
                            </li>
                            
                            <li className="nav-item">
                                <a class="nav-link " href="#" >SAP</a>
                            </li>
                            </ul>
                            
                        </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                </div>
            </nav> 
             
        </>
     );
}