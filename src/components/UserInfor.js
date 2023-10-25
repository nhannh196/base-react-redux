import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Nhan',
        address: 'Vinh Long',
        age: 26
    }

    handleOnChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleOnChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                {/* <button onClick={(e) => { this.handeClick(e) }}>Click</button>
                <button onMouseOver={this.handeMouseOver}>Hover</button> */}
                <form onSubmit={(e) => { this.handleOnSubmit(e) }}>
                    <input value={this.state.name} type="text" onChange={(e) => { this.handleOnChangeName(e) }} />
                    <input value={this.state.age} type="text" onChange={(e) => { this.handleOnChangeAge(e) }} />

                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default UserInfor;