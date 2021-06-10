import React from 'react';
import Sidebar from "../components/Sidebar"
import Postcards from "../components/PostCards"
import Topbar from "../components/Topbar"

const LastPosts = () => {
    return <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">

       
<div id="content">
        <Topbar></Topbar>
        <Postcards></Postcards>
        </div>
        </div>
    </div>;
};

export default LastPosts;