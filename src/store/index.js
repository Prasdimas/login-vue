import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // User
    username : '',
    password: '',
    rePassword: '',
    firstName: '',
    lastName: '',
    email: '',

    // Filter
    DateRange:[],
    search:'',

    // Form 
    edit : '',
    WOid : 0,
    NameProduct : '',
    NumberWO : '',
    qty : '', 
    selectedSatus : '',
    selectedOperator : '',
    Status : [
      {"name": 'Pending', 'id': '1' },
      {"name": 'in Progress', 'id': '2' },
      {"name": 'Completed', 'id': '3' },
      {"name": 'Cancelled', 'id': '4' },
    ],
    operators:[],
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
