import React from "react";

class DisplayInfor extends React.Component { 
    render(){
        const {name, age} = this.props;
        return(
            <div>
                <div>My name is {name} and I'm {age}</div>
            </div>
        )
    }
}

export default DisplayInfor