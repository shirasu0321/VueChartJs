import Vue from 'vue'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    EmpList: []
  },
  actions: {
    UpdateEmp ({commit}, param) {
      commit('UpdateEmpList', param)
    }
  },
  mutations: {
    UpdateEmpList (state, param) {
      state.EmpList.add(param)
    }
  },
  getters: {
  }
}
