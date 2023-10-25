import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShow: true
    }
    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        const { listUsers } = this.props;

        return (
            <div>
                <br />
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        {
                            this.state.isShow ? "Hide" : "Show"
                        }
                    </button>
                </div>
                {this.state.isShow &&
                    <div>
                        <hr />
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My old's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor