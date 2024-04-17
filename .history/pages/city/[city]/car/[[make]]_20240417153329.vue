<template lang="pug">
.w-full
  CarCard(v-for="car in items" :key="index")
</template>

<script setup lang="ts">
const { importCars } = useCars();


</script>
