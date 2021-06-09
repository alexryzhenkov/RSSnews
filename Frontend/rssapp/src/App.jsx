import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom" 
import Home from "./routes/Home"
import Feeds from "./routes/Feeds"
import LastPosts from "./routes/LastPosts"

const App = () => {
    return <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/feeds" component={Feeds}></Route>
                <Route exact path="/lastposts" component={LastPosts}></Route>
            </Switch>
        </Router>
    </div>;
};

export default App;