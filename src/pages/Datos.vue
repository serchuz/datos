<template>
    <div>
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Datos!</h1>
                <p>
                    Para estas pruebas de datos utilice el siguiente dataset: <br>
                    <a href="http://datos.gob.ar/dataset/equipamiento-cientifico-tecnologico">http://datos.gob.ar/dataset/equipamiento-cientifico-tecnologico</a>
                </p>
                 <p>
                    <router-link class="btn btn-primary btn-lg" to="/mapa">Ver Mapa &raquo;</router-link>
                    <router-link class="btn btn-primary btn-lg" to="/graficos">Ver Graficos &raquo;</router-link>
               </p>
            </div>
        </div>

        <div class="container">
            <h3>Filtros</h3>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="col-form-label">Equipo</label>
                        <select class="form-control" v-model="filtro.equipo_desc">
                            <option value=""></option>
                            <option v-for="option in equipos" v-bind:key="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-form-label">Tipo</label>
                        <select class="form-control" v-model="filtro.tipo">
                            <option value=""></option>
                            <option v-for="option in tipos" v-bind:key="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-form-label">Servicio</label>
                    <select class="form-control" v-model="filtro.servicios">
                        <option value=""></option>
                        <option v-for="option in servicios" v-bind:key="option">
                            {{ option }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="col-form-label">Provincia</label>
                    <select class="form-control" v-model="filtro.provincia">
                        <option value=""></option>
                        <option v-for="option in provincias" v-bind:key="option">
                            {{ option }}
                        </option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary" @click="filterData">Filtrar</button>
                <button type="button" class="btn" @click="resetFiltro">Reset</button>
            </form>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <vue-good-table :globalSearch="true" :columns="columns" :rows="rows" :paginate="true" :lineNumbers="true" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { DataService } from "../services/dataService";

var dataService = new DataService();

export default {
  data() {
    return {
      equipos: [],
      tipos: [],
      servicios: [],
      provincias: [],
      filtro: {
        equipo_desc: "",
        tipo: "",
        servicios: "",
        provincia: ""
      },
      columns: [
        {
          label: "Cod. equipo",
          field: "equipo_id"
        },
        {
          label: "Equipo",
          field: "equipo_desc"
        },
        {
          label: "Tipo",
          field: "tipo"
        },
        {
          label: "Servicios",
          field: "servicios"
        },
        {
          label: "Provincia",
          field: "provincia"
        }
      ],
      rows: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      dataService
        .fetchData()
        .then(res => {
          this.equipos = dataService.getFiltro("equipo_desc");
          this.tipos = dataService.getFiltro("tipo");
          this.servicios = dataService.getFiltro("servicios");
          this.provincias = dataService.getFiltro("provincia");

          this.rows = dataService.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    filterData() {
      this.rows = dataService.setFiltro(this.filtro);
    },
    resetFiltro() {
      this.filtro = {
        equipo_desc: "",
        tipo: "",
        servicios: "",
        provincia: ""
      };

      this.filterData();
    }
  }
};
</script>