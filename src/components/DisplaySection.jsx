import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

function DisplaySection(){
    return(
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brilliant</p>
            <span className="description"> A display that's up to 2x brighter in the sun. </span>
            <button className="button">Try me!</button>
            
        </div>
    );
}

export default DisplaySection;