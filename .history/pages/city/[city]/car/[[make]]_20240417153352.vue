<template lang="pug">
.w-full
  CarCard(v-for="car in cars" :key="index")
</template>

<script setup lang="ts">
const { importCars } = useCars();


</script>
