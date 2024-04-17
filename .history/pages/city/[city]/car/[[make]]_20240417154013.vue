<template lang="pug">
.w-full
  <CarCard v-for="car in cars"/>
</template>

<script setup lang="ts">
const { cars } = useCars();

console.log(cars);
</script>
