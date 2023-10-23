<template>
  <div id="stock">Stock actuel: {{leStock.stock}}</div>
  <button @click="leStock.vente">Une vente</button>
  <button @click="leStock.reappro">Réapprovisionnement</button>
  <hr>
  <div id="info">{{ leStock.stockBas }}</div>
  <hr>
  <div>
    Modification manuelle du stock
    <input type="number" v-model="leStock.stock" size="5">
  </div>
</template>
<style scoped>
  #stock, #info {
    font-size: 3rem;
  }
  button {
    padding: 1rem;
    margin: 1rem;
  }

</style>

<script setup>
  import { stockStore } from '@/stores/store.js';
  let leStock = stockStore();


</script>