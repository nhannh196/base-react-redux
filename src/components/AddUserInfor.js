import React, { useState } from "react";

const AddUserInfor = (props) => {

    const [user, setUser] = useState({
        name: 'Nhan',
        address: 'Vinh Long',
        age: 26
    })


    const handleOnChangeName = (e) => {
        setUser(
            {
                name: e.target.value,
                age: user.age
            }
        )
    }
    const handleOnChangeAge = (e) => {
        setUser({
            name:user.name,
            age: e.target.value
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        const handleAddUser = props.handleAddUser;
        handleAddUser(
           user 
        )
    }

    return (
        <div>
            My name is {user.name} and I'm {user.age}
            {/* <button onClick={(e) => { this.handeClick(e) }}>Click</button>
                <button onMouseOver={this.handeMouseOver}>Hover</button> */}
            <form onSubmit={(e) => { handleOnSubmit(e) }}>
                <input value={user.name} type="text" onChange={(e) => { handleOnChangeName(e) }} />
                <input value={user.age} type="text" onChange={(e) => { handleOnChangeAge(e) }} />

                <input type='submit' />
            </form>
        </div>
    )

}

export default AddUserInfor;