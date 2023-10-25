import React from 'react';

class MyComponent extends React.Component {
    state={
        name:'Nhan',
        address:'Vinh Long',
    }

    handeClick(e){
        console.log(e)
    }

    handeMouseOver(e){
        console.log(e.pageX, e.pageY)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handeClick}>Click</button>
                <button onMouseOver={this.handeMouseOver}>Hover</button>
            </div>
        )
    }
}

export default MyComponent;