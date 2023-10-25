import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Nhan 1', age: '16' },
            { id: 2, name: 'Nhan 2', age: '26' },
            { id: 3, name: 'Nhan 3', age: '36' }
        ]
    }

    handleAddUser = (newUserInfor) => {
        const newUser = {
            id: this.state.listUsers.length + 1,
            ...newUserInfor
        }
        this.setState({
            listUsers: [newUser, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        console.log("id need delete ", userId)
        const listUserClone = [...this.state.listUsers]
        let listDeletedUser = listUserClone.filter((user) => {
            return user.id !== userId;
        })

        this.setState({
            listUsers: listDeletedUser
        })
        console.log(listDeletedUser)
    }
    render() {
        return (
            <>
                <AddUserInfor handleAddUser={this.handleAddUser} />
                <DisplayInfor listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser} />
            </>
        )
    }
}

export default MyComponent;