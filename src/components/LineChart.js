import { Bar,  mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  extends: Bar,
  props: ['options'],
  mixins: [reactiveProp],
  mounted () {    
    let options = {
      scales: {
        xAxes: [ {    
           categoryPercentage: 0.9,
           barPercentage: 0.5
        }]
      }
    };

    this.renderChart(this.chartData, options)
  }
}