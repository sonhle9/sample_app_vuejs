import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Home from "./static_pages/Home"
// import About from "./static_pages/About"
// import Contact from "./static_pages/Contact"
// import Help from "./static_pages/Help"
// import Users from './users/Index'
// import UserNew from './users/New'
// import UserShow from './users/Show'
// import UserEdit from './users/Edit'
// import SessionNew from './sessions/New'
// import ShowFollowing from './users/ShowFollowing'
// import ShowFollowers from './users/ShowFollowers'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// import Home from "./static_pages/Home"
// import About from "./static_pages/About"
// import Contact from "./static_pages/Contact"
// import Help from "./static_pages/Help"
// import Users from './users/Index'
// import UserNew from './users/New'
// import UserShow from './users/Show'
// import UserEdit from './users/Edit'
// import SessionNew from './sessions/New'
// import ShowFollowing from './users/ShowFollowing'
// import ShowFollowers from './users/ShowFollowers'


// const routes = [
//     { path: "/", exact: true, component: Home },
//     { path: "/about", component: About },
//     { path: "/contact", component: Contact },
//     { path: "/help", component: Help },
//     { path: "/users", exact: true, component: Users },
//     { path: "/users/new", exact: true, component: UserNew },
//     { path: "/users/:id", exact: true, component: UserShow },
//     { path: "/users/:id/edit", exact: true, component: UserEdit },
//     { path: "/signup", exact: true, component: UserNew },
//     { path: "/login", exact: true, component: SessionNew },
//     { path: "/users/:id/following", exact: true, component: ShowFollowing },
//     { path: "/users/:id/followers", exact: true, component: ShowFollowers }
// ]

// export default routes

// // <Route exact path="/" component={Home}/>
// // <Route path="/about" component={About}/>
// // <Route exact path="/users" component={Users}/>
