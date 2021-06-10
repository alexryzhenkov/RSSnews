import React, {useState, createContext} from "react"

export const LastPostsContext = createContext();

export const LastPostsContextprovider = props => {
    const [posts, setPosts] = useState([])

    return(
        <LastPostsContext.Provider value={{posts, setPosts}}>
            {props.children}
        </LastPostsContext.Provider>
    )
} 


