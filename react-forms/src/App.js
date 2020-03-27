import React, {Component} from 'react';
import uuid from 'uuid/v4';
import './App.css'
import MultiInputForm from "./MultiInputForm";
import BoxMaker from "./BoxMaker";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[
                {id:uuid(),username:"ahashans",email:"ahashans@gmail.com", password:"password"},
                {id:uuid(),username:"ahashan",email:"ahashan@linkstaff.co.jp", password:"password"}
            ]};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(user){
        let newUser = {...user, id:uuid()};
        // this.setState((st,user)=>{
        //     st.add(user);
        // });
        this.setState({users:[...this.state.users,newUser]});
    }
    render() {
        let users= <ul>{this.state.users.map(function(user,i){
            return <li key={uuid()}><p>{user.username}</p><p>{user.email}</p><p>{user.password}</p></li>
        })}</ul>;
        return (
            <div className="App">
            {/*<MultiInputForm submit={this.handleSubmit}/>*/}
            {/*<h1>Users</h1>*/}
            {/*    {users}*/}
            <BoxMaker submit={this.addBox}/>
            </div>
        );
    }
}

export default App;