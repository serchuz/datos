<template>
  <div class="small">
    <h3>Agrupados por tipo de Equipo</h3>
    <br>
    <p>
      <line-chart :chart-data="datacollectionEquipo"></line-chart>
    </p>
    <hr>
    <h3>Agrupados por tipo de Institución</h3>
    <br>
    <p>
      <doughnut :chart-data="datacollectionTipo"></doughnut>
    </p>
  </div>
</template>

<script>
import { DataService } from "../services/dataService";
import { GraficoBarras, GraficoDona } from "../services/graficoService";
import LineChart from "../components/LineChart";
import Doughnut from "../components/DoughnutChart";

export default {
  components: {
    LineChart,
    Doughnut
  },
  data() {
    return {
      datacollectionEquipo: null,
      datacollectionTipo: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var dataService = new DataService();
      dataService
        .fetchData()
        .then(res => {
          let agrupados_equipo = dataService.countGroupAll("equipo_desc");
          let agrupados_tipo = dataService.countGroupAll(
            "tipo_institucion_descripcion"
          );

          this.datacollectionEquipo = GraficoBarras(agrupados_equipo);
          this.datacollectionTipo = GraficoDona(agrupados_tipo);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
  text-align: center;
}
</style>