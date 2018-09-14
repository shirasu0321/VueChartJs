import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    dailyChartData: {
      'series': [],
      'categories': [],
      'points': []
    },
    totalChartData: {
      labels: [],
      datasets: []
    },
    detailChartDataList: [
      {
        labels: [],
        datasets: []
      }
    ],
    selectedPichartData: '',
    overtimeColloctions: {
      persons: [{no: '', details: [{no: '', columns: []}]}]
    },
    selectedPerson: ''
  },
  actions: {
    GetDatacollection ({commit}, param) {
      Vue.api.get('eepy0')
        .then((res) => {
          commit('SetChartData', res)
        })
    },
    GetPieChart1Data ({commit}, param) {
      Vue.api.get('10o3hc')
        .then((res) => {
          commit('SetTotalChartData', res)
        })
    },
    GetOvertimeCollection ({commit}, param) {
      Vue.api.get('eepy0')
        .then((res) => {
          commit('SetOvertimeColloctions', res)
        })
    },
    ChangeDetailChartData ({commit, state}, param) {
      commit('ChangeSelectedPichartData', param[0]['_model'].label)
    },
    ChangeSelectedPerson ({commit}, param) {
      commit('ChangeSelectedPerson', param)
    },
    ChagenChartData ({commit}, param) {
      var params = {ProjectCodes: ['AAZ/SDBB', 'KSC/VIZ1'], EmpNos: ['48018']}
      Vue.api.post('Home/GetChartDataBySearch', {param: params})
        .then((res) => {
          commit('SetChartData', res)
        })
    }
  },
  mutations: {
    SetChartData (state, dataList) {
      state.dailyChartData = dataList.dailyChart.ChartData
      state.totalChartData = dataList.totalChart.ChartData
      state.detailChartDataList = dataList.totalChart.detailList
      state.overtimeColloctions = dataList.overtimeChart.gridData
    },
    SetTotalChartData (state, dataList) {
      state.totalChartData = dataList.totalChart.ChartData
      state.detailChartDataList = dataList.totalChart.detailList
    },
    SetOvertimeColloctions (state, dataList) {
      state.overtimeColloctions = dataList.overtimeChart.gridData
    },
    ChangeSelectedPichartData (state, selectedItem) {
      state.selectedPichartData = selectedItem
    },
    ChangeSelectedPerson (state, param) {
      state.selectedPerson = param
    }
  }
}
