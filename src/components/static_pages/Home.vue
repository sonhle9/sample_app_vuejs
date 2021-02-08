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
import React, { useState, useEffect }  from 'react'
import logo from '../logo.svg'
import {
  NavLink,
} from "react-router-dom"
import { connect } from 'react-redux'
import Pagination from 'react-js-pagination'
import flashMessage from '../shared/flashMessages'
import Pluralize from 'react-pluralize'
import Skeleton from 'react-loading-skeleton'
import API from '../shared/api'

const Home = ({ userData }) => {
  const [page, setPage] = useState(1)
  const [feed_items, setFeedItems] = useState([])
  const [total_count, setTotalCount] = useState(1)
  const [following, setFollowing] = useState(null)
  const [followers, setFollowers] = useState(null)
  const [micropost, setMicropost] = useState()
  const [gravatar, setGavatar] = useState()
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null);
  // const inputEl = useRef(null);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    new API().getHttpClient().get('', {params: {page: page},
      withCredentials: true , signal: signal}
    ).then(response => {
      if (response.data.feed_items) {
        setFeedItems(response.data.feed_items)
        setTotalCount(response.data.total_count)
        setFollowing(response.data.following)
        setFollowers(response.data.followers)
        setMicropost(response.data.micropost)
        setGavatar(response.data.gravatar)
      } else {
        setFeedItems([])
      }
    })
    .catch(error => {
      console.log(error)
    })

    return function cleanup() {
      abortController.abort()
    }

  }, [page])

  const handlePageChange = pageNumber => {
    setPage(pageNumber)
  }

  const handleContentInput = e => {
    setContent(e.target.value)
  }

  const handleImageInput = e => {
    if (e.target.files[0]) {
      const size_in_megabytes = e.target.files[0].size/1024/1024;
      if (size_in_megabytes > 512) {
        alert("Maximum file size is 512MB. Please choose a smaller file.");
        setImage(null);
        e.target.value = null;
      } else {
        setImage(e.target.files[0]);
      }
    }
  };

  const handleSubmit = (e) => {
      // console.log(inputEl.current.files[0])
      // let image = inputEl.current.files[0]
      // new API().getHttpClient().post('/microposts',
      //   {
      //     micropost: {
      //       content: content,
      //       image: image
      //     }
      //   },
      //   { withCredentials: true }
      // )
      // .then(response => {
      //   if (response.data.flash) {
      //     flashMessage(...response.data.flash)
      //     setContent('')
      //     setErrorMessage('')
      //       new API().getHttpClient().get('',
      //         {params: {page: page},
      //         withCredentials: true }
      //       )
      //       .then(response => {
      //         if (response.data.feed_items) {
      //           setFeedItems(response.data.feed_items)
      //           setTotalCount(response.data.total_count)
      //           setMicropost(response.data.micropost)
      //         } else {
      //           setFeedItems([])
      //         }
      //       })
      //       .catch(error => {
      //         console.log(error)
      //       })
      //   }
      //   if (response.data.error) {
      //     setErrorMessage(response.data.error)
      //   }
      // })
      // .catch(error => {
      //   console.log(error)
      // })
      const formData2 = new FormData();
      formData2.append('micropost[content]',
        content
      );
      if (image) {
      formData2.append('micropost[image]',
        image,
        image.name
      );
      }

      fetch(`https://railstutorialapi.herokuapp.com/api/microposts`, {
        method: "POST",
        body: formData2,
        credentials: 'include'
      })
      .then(response => response.json().then(data => {
        
        if (data.flash) {
          flashMessage(...data.flash)
          setContent('')
          setImage(null)
          document.querySelector('[name="micropost[image]"]').value = null
          setErrorMessage('')
            new API().getHttpClient().get('',
              {params: {page: page},
              withCredentials: true }
            )
            .then(response => {
              if (response.data.feed_items) {
                setFeedItems(response.data.feed_items)
                setTotalCount(response.data.total_count)
                setMicropost(response.data.micropost)
              } else {
                setFeedItems([])
              }
            })
            .catch(error => {
              console.log(error)
            })
        }
        if (data.error) {
          setErrorMessage(data.error)
        }

      })
      )

    e.preventDefault()
  }

  const removeMicropost = (index, micropostid) => {
      new API().getHttpClient().delete('/microposts/'+micropostid,
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.flash) {
          flashMessage(...response.data.flash)
            new API().getHttpClient().get('',
              {params: {page: page},
              withCredentials: true }
            )
            .then(response => {
              if (response.data.feed_items) {
                setFeedItems(response.data.feed_items)
                setTotalCount(response.data.total_count)
                setMicropost(response.data.micropost)
              } else {
                setFeedItems([])
              }
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return userData.loading ? (
    <>
    <Skeleton height={304} />
    <Skeleton circle={true} height={60} width={60} />
    </>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : userData.users ? (
    <div className="row">
      <aside className="col-md-4">
        <section className="user_info">
          <img alt={userData.users.name} className="gravatar" src={"https://secure.gravatar.com/avatar/"+gravatar+"?s=50"} />
          <h1>{userData.users.name}</h1>
          <span><NavLink to={"/users/"+userData.users.id}>view my profile</NavLink></span>
          <span><Pluralize singular={'micropost'} count={ micropost } /></span>
        </section>

        <section className="stats">
          <div className="stats">
            <NavLink to={"/users/"+userData.users.id+"/following"}>
              <strong id="following" className="stat">
                {following}
              </strong> following
            </NavLink>
            <NavLink to={"/users/"+userData.users.id+"/followers"}>
              <strong id="followers" className="stat">
                {followers}
              </strong> followers
            </NavLink>
          </div>
        </section>

        <section className="micropost_form">
          <form
          encType="multipart/form-data"
          action="/microposts"
          acceptCharset="UTF-8"
          method="post"
          onSubmit={handleSubmit}
          >
            { errorMessage &&
              <div id="error_explanation">
                <div className="alert alert-danger">
                  The form contains { errorMessage.length } error.
                </div>
                <ul>
                  { errorMessage.map((error, i) => {
                     return (<li key={i}>{error}</li>)
                  })}
                </ul>
              </div>
            }
            <div className="field">
                <textarea
                placeholder="Compose new micropost..."
                name="micropost[content]"
                id="micropost_content"
                value={content}
                onChange={handleContentInput}
                >
                </textarea>
            </div>
            <input type="submit" name="commit" value="Post" className="btn btn-primary" data-disable-with="Post" />
            <span className="image">
              <input
              accept="image/jpeg,image/gif,image/png"
              type="file"
              name="micropost[image]"
              id="micropost_image"
              onChange={handleImageInput}
              />
            </span>
          </form>
        </section>
      </aside>

      <div className="col-md-8">
        <h3>Micropost Feed</h3>
        <ol className="microposts">
          { feed_items.map((i, t) => (
              <li key={t} id= {'micropost-'+i.id} >
                <a href={'/users/'+i.user_id}>
                  <img alt={i.user_name} className="gravatar" src={"https://secure.gravatar.com/avatar/"+i.gravatar_id+"?s="+i.size} />
                </a>
                <span className="user"><a href={'/users/'+i.user_id}>{i.user_name}</a></span>
                <span className="content">
                  {i.content}
                  { i.image &&
                    <img alt="Example User" src={''+i.image+''} />
                  }
                </span>
                <span className="timestamp">
                {'Posted '+i.timestamp+' ago. '}
                {userData.users.id === i.user_id &&
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
      </div>
  </div>
  ) : (
    <React.Fragment>
    <div className="center jumbotron">
        <h1>Welcome to the Sample App</h1>
        <h2>
        This is the home page for the <a href="https://www.railstutorial.org/">React Tutorial</a> sample application.
        </h2>
        <NavLink to="/signup" className="btn btn-lg btn-primary">Sign up now!</NavLink>
    </div>
    <a href="https://rubyonrails.org/"><img alt="Rails logo" width="70" src={logo} /></a>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

export default connect(
  mapStateToProps
)(Home)
-->
