<template>
    <div>
        <div id="map"></div>
    </div>
</template>

<script>
import { DataService } from "../services/dataService";
import { initMap } from "../services/mapaService";

export default {
  mounted() {
    const dataService = new DataService();
    dataService
      .fetchData()
      .then(res => {
        initMap("map", dataService);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style>
#map {
  height: 100vh;
}

.info-window {
  width: 150px;
  text-align: center;
}
</style>