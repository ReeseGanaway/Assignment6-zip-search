import React,{Fragment} from "react"

function zipInfoDisplay(props){
    return(
        <Fragment>
            <li>props.attributes.State</li>
            <li>item.attributes.Location</li>
            <li>item.attributes.TotalWages</li>
              </Fragment>
    );
}

export default zipInfoDisplay;