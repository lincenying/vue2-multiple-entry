import api from '~api'

const state = {
    item: {
        data: {},
        path: ''
    }
}

const actions = {
    async ['getTopic']({commit, state, rootState: {route: { fullPath }}}, config) {
        const path = fullPath
        if (state.item.data.id && path === state.item.path) {
            return
        }
        const { data, success } = await api.get(`topic/${config.id}`)
        if (data && success) {
            commit('receiveTopic', {
                data,
                path
            })
        }
    },
}

const mutations = {
    ['receiveTopic'](state, {data, path}) {
        state.item = {
            data, path
        }
    }
}

const getters = {
    ['getTopic'](state) {
        return state.item
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
