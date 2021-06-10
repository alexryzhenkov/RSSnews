import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom" 
import Home from "./routes/Home"
import Feeds from "./routes/Feeds"
import LastPosts from "./routes/LastPosts"
import { LastPostsContextprovider } from './context/LastPostsContext';

const App = () => {
    return <LastPostsContextprovider>
    <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/feeds" component={Feeds}></Route>
                <Route exact path="/lastposts" component={LastPosts}></Route>
            </Switch>
        </Router>
        </LastPostsContextprovider> 
};

export default App;