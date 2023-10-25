import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <UserInfor />
                <DisplayInfor name={"Nhan"} age={26}/>
            </div>
        )
    }
}

export default MyComponent;