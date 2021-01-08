import React, { Component } from 'react';
import LoginResult from './LoginResult.js';
import UserLoginForm from './UserLoginForm.js';
import { withRouter } from 'react-router-dom';

class UserLogin extends Component {
  constructor(props){
     super(props);
     this.state = { 
         login: { username: "", password: ""},
         isLogin: false,
         data: {id:""}
     }
     this.processLoginUsername = this.processLoginUsername.bind(this);
     this.processLoginPassword = this.processLoginPassword.bind(this);
     this.processLoginForm = this.processLoginForm.bind(this);
  }
  
  processLoginUsername(event){
      let loginInfo = this.state;
      loginInfo.login.username = event.target.value;
      this.setState(loginInfo);
  }
  
  processLoginPassword(event){
      let loginInfo = this.state;
      loginInfo.login.password = event.target.value;
      this.setState(loginInfo);
  
  }

  processLoginForm(event){
      event.preventDefault();

      if(this.state.login.password === "password123") {
      let url = 'https://jsonplaceholder.typicode.com/users?username=' + this.state.login.username;
      fetch(url)
          .then(response => response.json())
          .then(response => {
              if(response[0]){
                  let loginInfo = this.state;
                  loginInfo.data = response[0];
                  loginInfo.isLogin = true;
                  this.setState(loginInfo);
                  this.props.history.push('/post/'+this.state.data.id);
              }
          });
      }
  }

//  componentDidMount(){
//      fetch('https://jsonplaceholder.typicode.com/users/

//  }

  render(){
    return (
      <div className="User" onSubmit={this.processLoginForm}>
        <UserLoginForm processLoginForm={this.processLoginForm} processLoginUsername={this.processLoginUsername} processLoginPassword={this.processLoginPassword} />
        <LoginResult loginInfo={this.state} />
        <p>You are currently {this.state.isLogin ? 'Logged In'+this.state.data.name : 'Not Logged In'} </p>
      </div>
    );
  }
}
export default withRouter(UserLogin);
