import React, {useState, createContext} from "react"

export const FeedsContext = createContext();

export const FeedsContextprovider = props => {
    const [feeds, setFeeds] = useState([])

    return(
        <FeedsContext.Provider value={{feeds, setFeeds}}>
            {props.children}
        </FeedsContext.Provider>
    )
} 
