import React, { useState } from "react";
import "./DisplayInfor.scss"
// import logo from "../logo.svg"

// class DisplayInfor extends React.Component {
//     constructor(props) {
//         console.log('constructor')
//         super(props)
//         this.state = {
//             isShow: true
//         }

//     }

//     componentDidMount(){
//         console.log('componentDidMount')
//         setTimeout(()=>{
//             document.title='Display Infor'
//         },3000)
//     }

//    componentDidUpdate(preProps,preState,spanshot) {
//     console.log('componentDidUpdate')
//     if(this.props.listUsers!==preProps){
//         if(this.props.listUsers.length===5){
//             alert('5 users added')
//         }
//     }
//    }
//     handleShowHide = () => {
//         this.setState({
//             isShow: !this.state.isShow
//         })
//     }

//     render() {
//         console.log('render')
//         const { listUsers } = this.props;

//         return (
//             <div className="display-infor-container">
//                 <br />
//                 <div>
//                     <button onClick={() => { this.handleShowHide() }}>
//                         {
//                             this.state.isShow ? "Hide" : "Show"
//                         }
//                     </button>
//                 </div>
//                 {this.state.isShow &&
//                     <>
//                         <hr />
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name's {user.name}</div>
//                                     <div>My old's {user.age}</div>
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//                 {/* <img src={logo} /> */}
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {

    // console.log('render')
    const { listUsers } = props;
    const [isShow, setIsShow] = useState(true);
    const handleShowHide = () => {
        setIsShow(!isShow)
    }
    return (
        <div className="display-infor-container">
            <br />
            <div>
                    <button onClick={() => {handleShowHide()}}>
                        {
                            isShow ? "Hide" : "Show"
                        }
                    </button>
                </div>
            {isShow &&
                <>
                    <hr />
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name's {user.name}</div>
                                <div>My old's {user.age}</div>
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
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

export default DisplayInfor