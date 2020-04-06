import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        page_no: 1
    },
    getters: {
        current_page: state => {
            return state.page_no
        }
    }
})

export default store;