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
// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import Pagination from 'react-js-pagination'
// import { useSelector } from 'react-redux'
// import flashMessage from '../shared/flashMessages'
// import { useParams } from "react-router-dom"
// import { NavLink } from "react-router-dom"

// export default function ShowFollowing() {
//   const [users, setUsers] = useState([])
//   const [xusers, setXusers] = useState([])
//   const [page, setPage] = useState(1)
//   const [total_count, setTotalCount] = useState(1)
//   const current_user = useSelector(state => state.user.users)
//   let { id } = useParams();
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     axios
//       .get(
//         'https://railstutorialapi.herokuapp.com/api/users/'+id+'/following',
//         {params: {page: page},
//         withCredentials: true }
//       )
//       .then(response => {
//         setUsers(response.data.users);
//         setXusers(response.data.xusers);
//         setTotalCount(response.data.total_count);
//         setUser(response.data.user);
//       })
//       .catch(error => {
//         console.log(error)
//       });
//   }, [page, id])

//   const handlePageChange = pageNumber => {
//     console.log(`active page is ${pageNumber}`);
//     setPage(pageNumber);
//   }

//   const removeUser = (index, userid) => {
//     axios
//       .delete(
//         'https://railstutorialapi.herokuapp.com/api/users/'+userid, { withCredentials: true }
//       )
//       .then(response => {
//         if (response.data.flash) {
//           const newUsers = [...users];
//           newUsers.splice(index, 1);
//           setUsers(newUsers);
//           flashMessage(...response.data.flash);
//         }
//       })
//       .catch(error => {
//         console.log(error)
//       });
//   };

//   return (
//     <>
//     <div className="row">
//       <aside className="col-md-4">
//         <section className="user_info">
//           <img alt={user.name} className="gravatar" src={"https://secure.gravatar.com/avatar/"+user.gravatar+"?s=80"} />
//           <h1>{user.name}</h1>
//           <span><NavLink to={"/users/"+user.id}>view my profile</NavLink></span>
//           <span><b>Microposts:</b> {user.micropost}</span>
//         </section>

//         <section className="stats">
//           <div className="stats">
//             <NavLink to={"/users/"+user.id+"/following"}>
//               <strong id="following" className="stat">
//                 {user.following}
//               </strong> following
//             </NavLink>
//             <NavLink to={"/users/"+user.id+"/followers"}>
//               <strong id="followers" className="stat">
//                 {user.followers}
//               </strong> followers
//             </NavLink>
//           </div>

//           <div className="user_avatars">
//             {xusers.length > 0 &&
//             <>
//             {xusers.map((u, i) => (
//             <a key={i} href={'/users/'+u.id}><img alt="{u.name}" className="gravatar" src={"https://secure.gravatar.com/avatar/"+u.gravatar_id+"?s=30"} /></a>
//             ))}
//             </>
//             }
//           </div>
//         </section>
//       </aside>

//       <div className="col-md-8">
//         {users.length > 0 &&
//         <>
//         <h3>Following</h3>
//         <ul className="users follow">
//         {users.map((u, i) => (
//         <li key={i}>
//           <img alt={u.name} className="gravatar" src={"https://secure.gravatar.com/avatar/"+u.gravatar_id+"?s="+u.size} />
//           <a href={'/users/'+u.id}>{u.name}</a>
//           {
//             current_user.admin && current_user.id !== u.id ? (
//               <>
//               | <a href={'#/users/'+u.id} onClick={() => removeUser(i, u.id)}>delete</a>
//               </>
//             ) : (
//               <></>
//             )
//           }
//         </li>
//         ))}
//         </ul>
//         <Pagination
//           activePage={page}
//           itemsCountPerPage={5}
//           totalItemsCount={total_count}
//           pageRangeDisplayed={5}
//           onChange={handlePageChange}
//         />
//         </>
//         }
//       </div>
//     </div>
//     </>
//   );
// }
-->
