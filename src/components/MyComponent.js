import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nhan 1', age: '16' },
            { id: 2, name: 'Nhan 2', age: '26' },
            { id: 3, name: 'Nhan 3', age: '36' }
        ]
    }
    render() {
        return (
            <div>
                <UserInfor />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        )
    }
}

export default MyComponent;