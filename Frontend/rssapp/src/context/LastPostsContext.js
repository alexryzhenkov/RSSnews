import React, {useState, createContext} from "react"

export const LastPostContext = createContext();

export const LastPostContextprovider = props => {
    const [posts, setPosts] = useState([])

    return(
        <LastPostContext.Provider value={{posts, setPosts}}>
            {props.children}
        </LastPostContext.Provider>
    )
} 


