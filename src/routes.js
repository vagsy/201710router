import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from "./components/Home/index";
import User from "./components/User/index";
import Profile from "./components/Profile/index";
export default  (
  <Router>
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">用户管理系统</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/user">用户管理</Link></li>
            <li><Link to="/profile">个人设置</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Route path="/" component={Home}/>
        <Route path="/user" component={User}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </div>

  </Router>
)