<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
<!--
import React, { useEffect } from 'react'
import {
  NavLink,
  useHistory,
} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux'
import API from '../shared/api';

export default function Header(){
  let history = useHistory()
  const userData = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const onClick = () => {
      new API().getHttpClient().delete('/logout', { withCredentials: true }
      ).then(response => {
        dispatch(fetchUsers())
        history.push("/")
      })
      .catch(error => {
        console.log("logout error", error)
      })
  }

  return (
    <header className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
      <NavLink exact id="logo" to="/">sample app</NavLink>
        <nav>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <ul className="nav navbar-nav navbar-right collapse navbar-collapse"
              id="bs-example-navbar-collapse-1">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/help">Help</NavLink></li>
            {
              userData.loading ? (
                <li><a href="/">Loading</a></li>
              ) : userData.error ? (
                <li><a href="/">{userData.error}</a></li>
              ) : userData.users ? (
                <React.Fragment>
                <li><NavLink to="/users">Users</NavLink></li>
                <li className="dropdown">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                    Account <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to={"/users/"+userData.users.id}>Profile</NavLink></li>
                    <li><NavLink to={"/users/"+userData.users.id+"/edit"}>Settings</NavLink></li>
                    <li className="divider"></li>
                    <li>
                      {/*<button onClick={onClick}>Logout</button>*/}
                      <a href="#logout" onClick={onClick}>Logout</a>
                    </li>
                  </ul>
                </li>
                </React.Fragment>
              ) : (
                <li><NavLink to="/login">Log in</NavLink></li>
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}
-->
