
import React, {useContext, useEffect} from 'react';
import LastPostsApi from "../apis/LastPostsApi"
import { FeedsContext } from '../context/FeedsContext';

const FeedConsole = () => {

    const {feeds, setFeeds}=useContext(FeedsContext)
    useEffect( () => {

        const fetchdata = async () =>{
        try{
            const responce = await LastPostsApi.get("/getFeeds")
            console.log(responce)
            setFeeds(responce.data.data)
        }
        catch (err){

        }
    }
    fetchdata()
    },[])


    return <div>
    
    <div class="container-fluid">


    <div class="d-sm-flexjustify-content-between">
    <div class="row">

    <div class="col-lg-6">
        <h1 class="h3 mb-0 text-gray-800">Feed management panel</h1>
    </div>
    
    </div>
    <div class="row">

    <div class="col-lg-6">
        <h6 > Add or delete feeds</h6>
    </div>
    
    </div>
    </div>
    </div>
    
    <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Link</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
    {feeds.map(feed =>{
        return(
            <tr class="table-info">
        <th scope="row">{feed.name}</th>
        <td>Description</td>
        <td>{feed.link}</td>
        <td>Column content</td>
      </tr>
        )
    })}
    </tbody>
  </table>
  </div>
};

export default FeedConsole;