<template>
  <div id="TotalChart">
    <PieChart class="pieChart" :chartData="chartData" test="プロジェクト総実績" clickFunc="true"></PieChart>
    <PieChart class="pieChart" :chartData="chartData2" test="工程詳細" clickFunc="false"></PieChart>
</div>
</template>

<script>
import PieChart from '@/components/global/BaseChart/PieChart'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  data(){
    return {
      test1: true
    }
  },
  components:{
    PieChart
  },
  computed: {
    ...mapState('Chart',{
      chartData: function(state){
        return state.totalChartData
      },
      chartData2: function(state){
        var base = state.detailChartDataList
        var fil = base.filter(data => data.proj == state.selectedPichartData)
        if(fil.length > 0 && !this.test1) {
          return fil[0].data
        } else {
          return {
            "labels": [],
            "datasets": [{"backgroundColor": [],"data": []}]
          }
        }
      }
    })
  },
  methods:{
    ...mapActions({
      GetPieChart1Data: 'Chart/GetPieChart1Data',
      GetPieChart2Data: 'Chart/ChangeDetailChartData'
    })
  },
  mounted(){
    this.test1 = false
  }
}
</script>

<style scoped>
#TotalChart{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
