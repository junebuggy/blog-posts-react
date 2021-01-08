import React, { Component } from 'react';

class PostDashboard extends Component {
  constructor(props){
     super(props);
     this.state = { 
         isLogin: false,
         userId: null,
         data: []
     }
     this.params = this.props.match.params;
  }
//  const {params} = this.props.match;

  componentDidMount() {
    if(this.params.id && Number.isInteger(Number(this.params.id))) {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.params.id)
          .then(response => { if(response.ok) {return response.json();}
            else {throw new Error();} })
          .then(response => { 
            let userInfo = this.state;
            userInfo.isLogin = true;
            userInfo.userId = this.params.id;
            userInfo.data = response;
            this.setState(userInfo);
            }).catch(function(error) {
                this.props.history.push('/');
            });
    } else {
        this.props.history.push('/');
    }
//    if(this.state.isLogin !== true) {
//        this.props.history.push('/');
//    }
  }

  render(){
    const listOfPost = this.state.data.length > 0 ? this.state.data.map((post) =>
          <tr key={post.id}><td>{post.title}</td><td>{post.body}</td></tr>
    ) : <tr><td></td></tr>;
    return (
      <div className="PostDashboard" >
        <table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
          </thead>
          <tbody>
          {listOfPost}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PostDashboard;
