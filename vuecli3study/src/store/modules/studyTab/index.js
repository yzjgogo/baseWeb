

export default {
  namespaced: true,
  state: {
    subject:''
  },

  mutations: {
    updateSubject(state, mySubject) {
      state.subject = mySubject
    }
  },

  actions: {}
}
