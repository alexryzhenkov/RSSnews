import React from 'react';
import Sidebar from "../components/Sidebar"
import Postcards from "../components/PostCards"
import Topbar from "../components/Topbar"
import FeedConsole from "../components/FeedConsole"


const Feeds = () => {
    return <div id="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" class="d-flex flex-column">

   
<div id="content">
    <Topbar></Topbar>
    <FeedConsole></FeedConsole>
    </div>
    </div>
</div>;;
};

export default Feeds;