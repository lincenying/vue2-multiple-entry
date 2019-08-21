import api from '@/api'

const state = {
    lists: {
        data: [],
        page: 1,
        path: ''
    }
}

const actions = {
    async ['getTopics'](
        {
            commit,
            state,
            rootState: {
                route: { fullPath }
            }
        },
        config
    ) {
        const path = fullPath
        if (state.lists.data.length > 0 && path === state.lists.path && config.page === 1) {
            return
        }
        const { data, success } = await api.get('topics', config)
        if (data && success) {
            commit('receiveTopics', {
                ...config,
                data,
                path
            })
        }
    }
}

const mutations = {
    ['receiveTopics'](state, { data, page, path }) {
        let list
        if (page === 1) {
            list = [].concat(data)
        } else {
            list = state.lists.data.concat(data)
        }
        state.lists = {
            data: list,
            page,
            path
        }
    }
}

const getters = {
    ['getTopics'](state) {
        return state.lists
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
