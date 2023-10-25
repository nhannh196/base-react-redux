import React from "react";
import "./DisplayInfor.scss"
import logo from "../logo.svg"

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
            <div className="display-infor-container">
                <br />
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        {
                            this.state.isShow ? "Hide" : "Show"
                        }
                    </button>
                </div>
                {this.state.isShow &&
                    <>
                        <hr />
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My old's {user.age}</div>
                                    <button onClick={()=>{this.props.handleDeleteUser(user.id)}}>Delete</button>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
                {/* <img src={logo} /> */}
            </div>
        )
    }
}

export default DisplayInfor