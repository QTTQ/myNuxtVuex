import Vue from 'vue'
import Vuex from 'vuex'

// import homePage from './homePage/index'
import home1 from './home1/index'
Vue.use(Vuex)
export default {
  // namespaced: true,
  // getters,
  modules: {
    home1
  },
}