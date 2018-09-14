<script>
import {Pie, mixins} from 'vue-chartjs'
import {mapState, mapGetters, mapActions} from 'vuex'
const { reactiveProp } = mixins

export default ({
  name: 'PieChart',
  props:{
    test: String,
    clickFunc: String
  },
  extends: Pie,
  mixins: [reactiveProp],
  data() {
    return {
      options:{
        title: {
          display: true,
          text: this.test
        },
        legend: {
          display: true
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data){
              return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index] + 'h'
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    ...mapActions({
      ChangeDetailChartData: 'Chart/ChangeDetailChartData'
    })
  },
  mounted () {
    if(this.clickFunc == "true"){
      this.options.onClick = (e, item) => this.ChangeDetailChartData(item)
    }
    this.renderChart(this.chartData, this.options)
  }
})
</script>


