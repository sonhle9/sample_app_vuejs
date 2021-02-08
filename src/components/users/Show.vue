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
import Pagination from 'react-js-pagination'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import flashMessage from '../shared/flashMessages'

export default function UserShow(){
  const [user, setUser] = useState({})
  const [microposts, setMicroposts] = useState([])
  const [id_relationships, setIdRelationships] = useState(null)
  const [page, setPage] = useState(1)
  const [total_count, setTotalCount] = useState(1)
  const current_user = useSelector(state => state.user.users)
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(
        'https://railstutorialapi.herokuapp.com/api/users/'+id,
        {params: {page: page},
        withCredentials: true }
      )
      .then(response => {
        if (response.data.user) {
          setUser(response.data.user);
          setMicroposts(response.data.microposts);
          setTotalCount(response.data.total_count);
          setIdRelationships(response.data.id_relationships);
        } else {
          setUser({});
          setMicroposts([]);
        }
      })
      .catch(error => {
        console.log(error)
      });
  }, [page, id_relationships, id])

  const handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    setPage(pageNumber);
  }

  const handleUnfollow = (e) => {
    axios
      .delete('https://railstutorialapi.herokuapp.com/api/relationships/'+id_relationships, { withCredentials: true })
      .then(response => {
        if (response.data.unfollow) {
          setIdRelationships(null);
        }
      })
      .catch(error => {
        console.log(error)
      });
    e.preventDefault();
  }

  const handleFollow = (e) => {
    axios
      .post(
        'https://railstutorialapi.herokuapp.com/api/relationships',
        {
          followed_id: id
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.follow) {
          setIdRelationships(1);
        }
      })
      .catch(error => {
        console.log(error)
      });
    e.preventDefault();
  }

  const removeMicropost = (index, micropostid) => {
    axios
      .delete(
        'https://railstutorialapi.herokuapp.com/api/microposts/'+micropostid, { withCredentials: true }
      )
      .then(response => {
        if (response.data.flash) {
          flashMessage(...response.data.flash)
          axios
            .get(
              'https://railstutorialapi.herokuapp.com/api/users/'+id,
              {params: {page: page},
              withCredentials: true }
            )
            .then(response => {
              if (response.data.user) {
                setUser(response.data.user);
                setMicroposts(response.data.microposts);
                setTotalCount(response.data.total_count);
                setIdRelationships(response.data.id_relationships);
              } else {
                setUser({});
                setMicroposts([]);
              }
            })
            .catch(error => {
              console.log(error)
            });
        }
      })
      .catch(error => {
        console.log(error)
      });
  };

  return (
    <div className="row">
      <aside className="col-md-4">
        <section>
          <h1>
            <img alt="Example User" className="gravatar" src={"https://secure.gravatar.com/avatar/"+user.gravatar_id+"?s="+user.size} />
            {user.name}
          </h1>
        </section>
        <section className="stats">
          <div className="stats">
            <a href="/users/1/following">
              <strong id="following" className="stat">
                {user.following}
              </strong>
              following
            </a>
            <a href="/users/1/followers">
              <strong id="followers" className="stat">
                {user.followers}
              </strong>
              followers
            </a>
          </div>
        </section>
      </aside>

      <div className="col-md-8">
        {current_user && current_user.id !== parseInt(id) &&
        <div id="follow_form">
          {
            user.current_user_following_user ? (
              <form
              action={"/relationships/"+id}
              acceptCharset="UTF-8"
              data-remote="true"
              method="post"
              onSubmit={handleUnfollow}
              >
                <input
                type="submit"
                name="commit"
                value="Unfollow"
                className="btn"
                data-disable-with="Unfollow"
                />
              </form>
            ) : (
              <form
              action="/relationships"
              acceptCharset="UTF-8"
              data-remote="true"
              method="post"
              onSubmit={handleFollow}
              >
                <div>
                <input
                type="hidden"
                name="followed_id"
                id="followed_id"
                value={id}
                />
                </div>
                <input
                type="submit"
                name="commit"
                value="Follow"
                className="btn btn-primary"
                data-disable-with="Follow"
                />
              </form>
            )
          }
        </div>
        }
        {microposts.length > 0 &&
        <>
        <h3>{'Microposts ('+total_count+')'}</h3>
        <ol className="microposts">
          { microposts.map((i, t) => (
              <li key={t} id= {'micropost-'+i.id} >
                <a href={'/users/'+user.id}>
                  <img alt={i.user_name} className="gravatar" src={"https://secure.gravatar.com/avatar/"+user.gravatar_id+"?s=50"} />
                </a>
                <span className="user"><a href={'/users/'+i.user_id}>{user.name}</a></span>
                <span className="content">{i.content}</span>
                <span className="timestamp">
                {'Posted '+i.timestamp+' ago. '}
                {user.id === i.user_id &&
                  <a href={'#/microposts/'+i.id} onClick={() => removeMicropost(t, i.id)}>delete</a>
                }
                </span>
              </li>
          ))}
        </ol>

        <Pagination
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={total_count}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
        </>
        }
      </div>
    </div>
  )
}
-->
