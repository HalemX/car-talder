<template lang="pug">
.w-full
  CarCard(v-for="(item, index) in items" :key="index")
</template>

<script setup lang="ts">
const { importCars } = useCars();


</script>
