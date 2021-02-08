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
import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import flashMessage from '../shared/flashMessages'
import Pluralize from 'react-pluralize'
import { useHistory } from "react-router-dom"

export default function UserEdit(){
  let { id } = useParams();
  const [user, setUser] = useState({})

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState('')
  const [gravatar, setGravatar] = useState('')

  let history = useHistory();

  useEffect(() => {
    axios
      .get(
        'https://railstutorialapi.herokuapp.com/api/users/'+id+'/edit', { withCredentials: true }
      )
      .then(response => {
        if (response.data.user) {
          setUser(response.data.user);
          setName(response.data.user.name);
          setEmail(response.data.user.email);
          setGravatar(response.data.gravatar);
        }
        if (response.data.flash) {
          flashMessage(...response.data.flash);
          history.push("/");
        }
      })
      .catch(error => {
        console.log(error)
      });
  }, [id, history])

  const handleNameInput = e => {
    setName(e.target.value);
  };

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmationInput = e => {
    setPasswordConfirmation(e.target.value);
  };

  const handleUpdate = (e) => {
    axios
      .patch(
        'https://railstutorialapi.herokuapp.com/api/users/'+id,
        {
          user: {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.flash_success) {
          flashMessage(...response.data.flash_success)
          setPassword('')
          setPasswordConfirmation('')
          axios
            .get(
              'https://railstutorialapi.herokuapp.com/api/users/'+id+'/edit', { withCredentials: true }
            )
            .then(response => {
              if (response.data.user) {
                setUser(response.data.user);
                setName(response.data.user.name);
                setEmail(response.data.user.email);
                setGravatar(response.data.gravatar);
              }
              if (response.data.flash) {
                flashMessage(...response.data.flash);
                history.push("/");
              }
            })
            .catch(error => {
              console.log(error)
            });
        }
        if (response.data.error) {
          setErrors(response.data.error);
        }
      })
      .catch(error => {
        console.log(error)
      });
    e.preventDefault();
  }

  return (
    <>
    <h1>Update your profile</h1>
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <form
        action="/users/1"
        acceptCharset="UTF-8"
        method="post"
        onSubmit={handleUpdate}
        >
          { errors &&
            <div id="error_explanation">
              <div className="alert alert-danger">
                The form contains <Pluralize singular={'error'} count={ errors.length } />.
              </div>
              <ul>
                { errors.map((error, i) => {
                   return (<li key={i}>{error}</li>)
                })}
              </ul>
            </div>
          }
          <label htmlFor="user_name">Name</label>
          <input
          className="form-control"
          type="text"
          value={name}
          name="name"
          id="user_name"
          onChange={handleNameInput}
          />

          <label htmlFor="user_email">Email</label>
          <input
          className="form-control"
          type="email"
          value={email}
          name="email"
          id="user_email"
          onChange={handleEmailInput}
          />

          <label htmlFor="user_password">Password</label>
          <input
          className="form-control"
          type="password"
          name="password"
          id="user_password"
          value={password}
          onChange={handlePasswordInput}
          />

          <label htmlFor="user_password_confirmation">Confirmation</label>
          <input
          className="form-control"
          type="password"
          name="password_confirmation"
          id="user_password_confirmation"
          value={password_confirmation}
          onChange={handlePasswordConfirmationInput}
          />

          <input type="submit" name="commit" value="Save changes" className="btn btn-primary" data-disable-with="Save changes" />
        </form>
        <div className="gravatar_edit">
          <img alt={user.name} className="gravatar" src={"https://secure.gravatar.com/avatar/"+gravatar+"?s=80"} />
          <a href="https://gravatar.com/emails" target="_blank" rel="noopener noreferrer">change</a>
        </div>
      </div>
    </div>
    </>
  )
}
-->
