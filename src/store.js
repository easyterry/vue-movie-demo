import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    pswd: '',
  },
  actions: {
    changeData(name, username, pswd) {
      name.commit('changeData', username, pswd)
    }
  },
  mutations: {
    changeData(state, username, pswd) {
      state.username = username,
        state.pswd = pswd
    }
  }
})
