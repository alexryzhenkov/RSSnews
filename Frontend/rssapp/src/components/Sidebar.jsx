import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return         <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">RSS Feed Analyzer</div>
                </a>


                <hr class="sidebar-divider my-0"></hr>


                <li class="nav-item">
                    <a class="nav-link" href="/">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>


                <hr class="sidebar-divider"></hr>




                <li class="nav-item">
                    <a class="nav-link collapsed" href="/feeds" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Admin panel</span>
                    </a>
                </li>
                

                <li class="nav-item">
                    <a class="nav-link" href="/lastposts">
                        <i class="fas fa-fw fa-chart-area"></i>
                        <span>Last news</span></a>
                </li>


</ul>;
};

export default Sidebar;




