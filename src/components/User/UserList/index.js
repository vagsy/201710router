import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
export default class UserList extends Component {
  constructor(){
    super();
    this.state = {users:[]};
  }
  componentDidMount(){
    let users = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    this.setState({users});
  }
  render() {
    return (
      <ul className="list-group">
        {
          this.state.users.map(item=>(
            <li key={item.id} className="list-group-item">
              {item.username}
            </li>
          ))
        }
      </ul>
    )
  }
}