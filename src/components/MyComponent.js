import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Nhan',
        address: 'Vinh Long',
        age: 26
    }

    handeClick(e) {
        // console.log(e)
        this.setState({
            name: "Hong Nhan",
            age: Math.floor((Math.random() * 1000) + 1)
        })
    }

    handeMouseOver(e) {
        // console.log(e.pageX, e.pageY)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(e) => { this.handeClick(e) }}>Click</button>
                <button onMouseOver={this.handeMouseOver}>Hover</button>
            </div>
        )
    }
}

export default MyComponent;