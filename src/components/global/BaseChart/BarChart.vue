<script>
import {Bar, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default ({
  name: 'BarChart',
  extends: Bar,
  mixins: [reactiveProp],
  data() {
    return {
      options:{
        title: {
          display: true,
          text: '実績集計'
        },
        scales: {
          yAxes: [{
            stacked: true
          }],
          xAxes: [ {
            stacked: true,
            categoryPercentage: 0.5,
            barPercentage: 1
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})
</script>

