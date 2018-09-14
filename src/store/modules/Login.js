import { api } from '@/api/Index'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    userId: '',
    userName: ''
  },
  actions: {
    Auth ({commit}, param) {
      api.get((res) => {
        if (res['auth_result']) {
          commit('setUserInfo', res)
          router.push({name: 'Home'})
        }
      }, 'n7zma', param)
    }
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userId = userInfo[0].USER_NO
      state.userName = userInfo[0].USER_NM
    }
  },
  getters: {
    getUserName (state, getters) {
      return state.userName
    }
  }
}
