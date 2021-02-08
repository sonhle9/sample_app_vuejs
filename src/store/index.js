import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     loadingStatus: 'notLoading',
//     todos: []
//   },
//   mutations: {
//     SET_LOADING_STATUS(state, status) {
//       state.loadingStatus = status
//     },
//     SET_TODOS(state, todos) {
//       state.todos = todos
//     }
//   },
//   actions: {
//     fetchTodos(context) {
//       context.commit('SET_LOADING_STATUS', 'loading')
//       Vue.axios.get('api/sessions').then(response => {
//         context.commit('SET_LOADING_STATUS', 'notLoading')
//         context.commit('SET_TODOS', response.data.todos)
//       })
//     }
//   }
// })
