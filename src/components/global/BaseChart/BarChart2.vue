<template>
  <div>
    <div id="chart2"></div>
  </div>
</template>

<script>
export default {
  props: {
    ChartData: {}
  },
  data(){
    return {
    }
  },
  methods:{
    createChart: function(){
      var options = {
        annotations: {
          yaxis: [
            {
              y:8,
              borderColor: '#ff0000'
            }
          ],
          points: this.ChartData.points
        },
        chart: {
          height: 380,
          type: 'bar',
          stacked: true,
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
          }
        },
        series: this.ChartData.series,
        xaxis: {
          categories: this.ChartData.categories
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, val2) {
            if(val2.globals.series[val2.seriesIndex][val2.dataPointIndex] == 0){
              return ''
            }
            return val2.globals.seriesNames[val2.seriesIndex]
          }
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            show: true,
            formatter: function(val){
              return val + 'h'
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'left',
          verticalAlign: 'top',
          offsetX: -10,
          offsetY: 0
        }
      }
      var chart = new ApexCharts(
        document.querySelector("#chart2"),
        options
      )
      chart.render()
    }
  },
  mounted(){
    
  },
  watch: {
    ChartData: function(){
      this.createChart()
    }
  }
}
</script>

<style>
#chart2 {
  max-width: 1000px;
  margin: 35px auto;
}
</style>
