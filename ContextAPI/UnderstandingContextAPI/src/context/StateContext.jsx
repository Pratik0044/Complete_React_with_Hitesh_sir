import React from "react";
import Context1 from "./ContextFile";

const State1 = (props) => {
    const state={
        "name" : "Pratik",
        "class" : "B.Tech"
    }
    return(
        <Context1.Provider value={state}>
            {props.children}
        </Context1.Provider>
    )
}

export default State1;
