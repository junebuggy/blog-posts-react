import React, { Component } from 'react';

class LoginResult extends Component {

  render(){
    return (
      <div className="LoginResult" >
        <p>{this.props.loginInfo.login.username}</p>
        <p>{this.props.loginInfo.login.password}</p>
      </div>
    );
  }
}
export default LoginResult;
