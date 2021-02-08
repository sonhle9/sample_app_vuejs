<template>
    <div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
<!--
import React, { useState } from 'react'
// import {Redirect} from 'react-router-dom'
// import axios from "axios"
import {
  NavLink,
  useHistory,
} from "react-router-dom"
import flashMessage from '../shared/flashMessages'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import API from '../shared/api'

const New = ({ userData, fetchUsers }) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberme] = useState('1');
  // const inputEl = useRef(null);

  // useEffect(() => {
  //   inputEl.current.focus();
  // })

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };
  const handleRememberMeInput = e => {
    setRememberme(e.target.value);
  };

  const handleSubmit = (e) => {
    // inputEl.current.focus();
      new API().getHttpClient().post('/login',
        {
          session: {
            email: email,
            password: password,
            remember_me: rememberMe
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.user) {
          fetchUsers();
          history.push("/users/"+response.data.user.id);
        }
        if (response.data.flash) {
          flashMessage(...response.data.flash)
        }
      })
      .catch(error => {
        console.log(error)
      });
    e.preventDefault();
  }

  return (
    <React.Fragment>
    {/* <div className={"alert alert-" + this.state.flash[0]}>{this.state.flash[1]}</div> */}
    <h1>Log in</h1>
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <form
        action="/login"
        acceptCharset="UTF-8"
        method="post"
        onSubmit={handleSubmit}
        >

          <label htmlFor="session_email">Email</label>
          <input
          className="form-control"
          type="email"
          name="email"
          id="session_email"
          value={email}
          onChange={handleEmailInput}
          />

          <label htmlFor="session_password">Password</label>
          <a href="/password_resets/new">(forgot password)</a>
          <input
          className="form-control"
          type="password"
          name="password"
          id="session_password"
          value={password}
          onChange={handlePasswordInput}
          />

          <label className="checkbox inline" htmlFor="session_remember_me">
            <input
            name="remember_me"
            type="hidden"
            value="0" />
            <input
            type="checkbox"
            name="remember_me"
            id="session_remember_me"
            value={rememberMe}
            onChange={handleRememberMeInput}
            />
            <span>Remember me on this computer</span>
          </label>
          <input type="submit" name="commit" value="Log in" className="btn btn-primary" data-disable-with="Log in" />
        </form>
        <p>New user? <NavLink to="/signup">Sign up now!</NavLink></p>
      </div>
    </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New)
-->
