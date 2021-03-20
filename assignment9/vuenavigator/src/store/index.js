import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: {},
    current: "",
    currentHeader: "",
  },
  mutations: {},
  actions: {
    init({commit, state}) {
      console.log("init")
      let contentJson = fetch("./navigator-input.json");

      contentJson.then(content => {
        return content.json();
      }).then(json => {
        state.content = json
      })
    },

    updateCurrent({commit, state}, current) {

      state.current = current
    },
    updateCurrentHeader({commit, state}, current) {
      state.currentHeader = current
    }
  },
  modules: {}
})
