<template>
  <div id="ChartPanel">
    <img
    class="searchIcon"
    src="@/assets/Search-icon.png"
    @click="openModal"
    >
    <img
    class="searchIcon"
    src="@/assets/Csv-icon.png"
    @click="createCsv"
    >
    <DailyChart v-show="DispTab=='daily'" />
    <TotalChart v-if="DispTab=='total'" />
    <OvertimeChart v-if="DispTab=='overtime'" />
    <p id="menu">
      <a id="daily" :style="dailyTabStyle" @click="switchTab">日別</a>
      <a id="total" :style="totalTabStyle" @click="switchTab">総作業時間</a>
      <a id="overtime" :style="overtimeTabStyle" @click="switchTab">残業時間</a>
    </p>
    <SearchModal :class="{ 'is-active' : isModalActive }" @close="closeModal"></SearchModal>
  </div>
</template>

<script>
import DailyChart from "./Chart/DailyChart"
import TotalChart from "./Chart/TotalChart"
import OvertimeChart from './Overtime/OvertimeChart'
import SearchModal from '../SearchModal/SearchModal'
import {mapState, mapActions} from 'vuex'

export default {
  data(){
    return{
      DispTab: 'daily',
      modal: false,
      isModalActive: false
    }
  },
  components: {
    DailyChart,
    TotalChart,
    OvertimeChart,
    SearchModal
  },
  computed: {
    dailyTabStyle: function(){
      return {
        'background-color': this.DispTab=='daily' ? 'white': '#ff4646',
        'color': this.DispTab=='daily' ? '#ff4646': 'white'
      }
    },
    totalTabStyle: function(){
      return {
        'background-color': this.DispTab=='total' ? 'white': '#9c9ee2',
        'color': this.DispTab=='total' ? '#9c9ee2': 'white'
      }
    },
    overtimeTabStyle: function(){
      return {
        'background-color': this.DispTab=='overtime' ? 'white': '#99f84b',
        'color': this.DispTab=='overtime' ? '#99f84b': 'white'
      }
    }
  },
  mounted() {
    this.GetDatacollection()
  },
  methods:{
    ...mapActions({
      GetDatacollection: 'Chart/GetDatacollection'
    }),
    ...mapState('Chart',{
      createCsv(state) {
        alert('CSVを出力します')
      }
    }),
    switchTab(e) {
      this.DispTab = e.target.id
    },
    openModal() {
      this.isModalActive = true;
    },
    closeModal() {
      this.isModalActive = false;
    }
  }
}
</script>

<style scopped>
#ChartPanel{
  display: inline-block;
  height: 100%;
  width: 93%;
  background-color: white;
}
#menu{
  position: absolute;
  left:93%;
  top:10%;
}
#menu a{
display: block;
text-decoration: none;
text-align: center;
writing-mode: vertical-rl;
width: 50px;
height: 150px;
border-bottom: none;
padding: 0 8px 0 0;
border-radius: 0px 15px 15px 0px;
font-size: 20px;
}
#bar-chart{
  padding: 0px 50px 0px 80px;
}
.searchIcon{
  width: 50px;
  height: 50px;
  margin-left: 30px;
  margin-top: 30px;
  cursor: pointer;
}
.modal-card {
  width: 90%;
  height: 80%;
}
</style>
