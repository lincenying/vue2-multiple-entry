import Vue from 'vue'
import Vuex from 'vuex'
import topics from './modules/topics'
import topic from './modules/topic'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        topics,
        topic
    }
})
