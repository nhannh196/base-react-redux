import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        return (
            <div>
                <br />
                <hr />
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My odl's {user.age}</div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor