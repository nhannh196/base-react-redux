import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Nhan 1', age: '16' },
        { id: 2, name: 'Nhan 2', age: '26' },
        { id: 3, name: 'Nhan 3', age: '36' }
    ])
    const handleAddUser = (newUserInfor) => {

        // console.log(this.state.listUsers)
        const newUser = {
            id: listUsers.length + 1,
            ...newUserInfor
        }
        setListUsers(
            [newUser, ...listUsers]
        )
    }

    const handleDeleteUser = (userId) => {
        const listUserClone = [...listUsers]
        let listDeletedUser = listUserClone.filter((user) => {
            return user.id !== userId;
        })
        setListUsers(
            listDeletedUser
        )
    }

    const resetUser = () => {
        if (listUsers.length === 1) {
            if (listUsers[0].id !== 1) {
                let userReset = [...listUsers]
                // console.log(userReset)
                userReset[0].id = 1
                setListUsers(
                    userReset
                )
            }
        }
    }

    resetUser();
    return (
        <>
            <AddUserInfor handleAddUser={handleAddUser} />
            <DisplayInfor listUsers={listUsers}
                handleDeleteUser={handleDeleteUser} />
        </>
    )

}

export default MyComponent;