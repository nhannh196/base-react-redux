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

        console.log(this.state.listUsers)
        const newUser = {
            id: this.state.listUsers.length + 1,
            ...newUserInfor
        }
        this.setState({
            listUsers: [newUser, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        const listUserClone = [...this.state.listUsers]
        let listDeletedUser = listUserClone.filter((user) => {
            return user.id !== userId;
        })
        this.setState({
            listUsers: listDeletedUser
        })
    }

    resetkUser = () => {
        if (this.state.listUsers.length === 1) {
            if (this.state.listUsers[0].id != 1) {
                let userReset = [...this.state.listUsers]
                console.log(userReset)
                userReset[0].id = 1
                this.setState({
                    listUsers: userReset
                })
            }
        }
    }



    render() {
        {
            this.resetkUser();
            // console.log(this.state.listUsers)

        }
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