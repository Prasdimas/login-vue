import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username : '',
    password: '',
    rePassword: '',
    firstName: '',
    lastName: '',
    email: '',
  },
  mutations: {
    SET_OBJECT(state, v) {
      let name = v[0];
      let val = v[1];
      state[name] = val;
    },

    SET_OBJECTS(state, v) {
      let name = v[0];
      let val = v[1];
      for (let i = 0; i < name.length; i++) state[name[i]] = val[i];
    },
  },
  actions: {
  },
  modules: {
  }
})
