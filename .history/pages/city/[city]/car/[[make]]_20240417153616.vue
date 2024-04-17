<template lang="pug">
.w-full
  <Card v-for="car in cars" :key="car.id" :carData="car">
</template>

<script setup lang="ts">
const { cars } = useCars();
</script>
