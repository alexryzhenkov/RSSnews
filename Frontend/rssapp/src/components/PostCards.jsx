
import React, {useContext, useEffect} from 'react';
import LastPostsApi from "../apis/LastPostsApi"
import { LastPostsContext } from '../context/LastPostsContext';

const PostCards = (props) => {
    const {posts, setPosts}=useContext(LastPostsContext)
    useEffect( () => {

        const fetchdata = async () =>{
        try{
            const responce = await LastPostsApi.get("/getFirstPosts")
            console.log(responce)
            setPosts(responce.data.data)
            console.log(posts)
            
        }
        catch (err){

        }
    }
    fetchdata()
    },[])



    const sayHello =  () => {
        const updatefeed = async () =>{
            try{
                const answer = await LastPostsApi.get("/refreshAnalysis")
                const responce = await LastPostsApi.get("/getFirstPosts")
                console.log(responce)
                setPosts(responce.data.data)
                console.log(posts)
                
            }
            catch (err){
    
            }
        }
        updatefeed()
      }





    return <div>


        <div class="container-fluid">


        <div class="d-sm-flexjustify-content-between mb-4">
        <div class="row">

        <div class="col-lg-2">
            <h1 class="h3 mb-0 text-gray-800">Cards</h1>
        </div>
        <div class="col-lg-2">
        <a href="#" onClick={sayHello} class="btn btn-info btn-icon-split">
                                        <span class="icon text-white-50">
                                            <i class="fas fa-flag"></i>
                                        </span>
                                        <span class="text">Refresh</span>
                                    </a>
        </div>
        </div>

        
        </div>

<div class="row">

<div class="col-lg-4">

    {posts.map(post =>{
        return(
            <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">{post.title}</h6>
                <p class="m-0">{post.source}</p>
            </div>
            <div class="card-body">
                {post.summary}
            </div>
            <div class="card-footer text-muted">
                {post.date}
            </div>
        </div>
        )
    })}

</div>
</div>



        </div>
    </div>;
};

export default PostCards;