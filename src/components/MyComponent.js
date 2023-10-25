import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Nhan',
        address: 'Vinh Long',
        age: 26
    }

    // handeClick(e) {
    //     // console.log(e)
    //     this.setState({
    //         name: "Hong Nhan",
    //         age: Math.floor((Math.random() * 1000) + 1)
    //     })
    // }

    // handeMouseOver(e) {
    //     // console.log(e.pageX, e.pageY)
    // }

    handleOnChangeInput = (e) => {
        this.setState({
            name: e.target.value
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
                    <input type="text" onChange={(e) => { this.handleOnChangeInput(e) }} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default MyComponent;