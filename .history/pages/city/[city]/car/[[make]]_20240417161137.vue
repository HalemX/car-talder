<template lang="pug">
.w-full
  <CarCard v-for="car in cars" :key="car" :carData=/>
</template>

<script setup lang="ts">
const { cars } = useCars();

console.log(cars);
</script>
