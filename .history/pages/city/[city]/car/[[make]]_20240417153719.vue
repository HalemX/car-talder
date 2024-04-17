<template lang="pug">
.w-full
  <CarCard />
</template>

<script setup lang="ts">
const { cars } = useCars();

console.log(cars.value);
</script>
