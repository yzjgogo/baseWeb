import Vue from 'vue'
import Vuex from 'vuex'
import classicsRead from './modules/classicsRead'
import studyTab from './modules/studyTab'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        classicsRead,
        studyTab
    },
    getters
})