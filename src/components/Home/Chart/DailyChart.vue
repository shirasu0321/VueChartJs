<template>
  <div id="DailyChart">
    <bar-chart :chart-data="ChartData"></bar-chart>
    <button @click="ChagenChartData" class="button is-rounded">データを更新</button>
  </div>
</template>

<script>
import BarChart from '@/components/global/BaseChart/BarChart2'
import {mapState, mapActions} from 'vuex'

export default {
  components:{
    BarChart
  },
  computed: mapState('Chart',{
    ChartData(state){
      return state.dailyChartData
    }
  }),
  methods: {
    ...mapActions({
      GetDatacollection: 'Chart/GetDatacollection',
      ChagenChartData: 'Chart/ChagenChartData'
    })
  },
  mounted: function(){
    console.log('mounted2')
  },
  created: function(){
  }
}
</script>

<style scoped>

</style>



