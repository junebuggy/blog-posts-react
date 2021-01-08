import React, { Component } from 'react';

class UserLoginForm extends Component {

  render(){
    return (
      <div className="User" onSubmit={this.props.processLoginForm}>
        <form>
           <label>Username </label>
           <input name="username" type="text" onChange={this.props.processLoginUsername} />
           <br />
           <label>password </label>
           <input name="password" type="text" onChange={this.props.processLoginPassword} />
           <br />
           <input type="submit" name="submit" />
        </form>
      </div>
    );
  }
}
export default UserLoginForm;
