import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = () => {
    return <div>

        <div class="row">
            <div class="col-sm-3"></div>
            
            <div class="col-sm-3" >    

            <Link to="/lastposts">
                
                <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                    <div class="card-body">
                        <h4 class="card-title">Latest news</h4>
                        <p class="card-text">See the latest news post from each rss feed</p>
                    </div>
                </div> 
                
            </Link>


            </div>
            
            <div class="col-sm-3" >
            <Link to="/lastposts">            
                <div class="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                    <div class="card-body">
                        <h4 class="card-title">RSS feeds management panel</h4>
                        <p class="card-text">See all the rss feeds. Add, delete and modify rss feeds.</p>
                    </div>
                </div>   
                </Link>
            </div>
            
        </div>

    </div>;
};

export default SubMenu;