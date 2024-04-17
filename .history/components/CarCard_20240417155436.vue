<template lang="pug">
.shadow.border.w-full.overflow-hidden.mb-5.cursor-pointer(class="h-[200px]") 
  .flex.h-full
    img(:src="carData.url" class="w-[300px] h-full")
    .p-4.flex.flex-col
      div
        h1.text-2xl.text-blue-700 {{ carData.name }}
        p.text-gray-700 {{ carData.description }}
        h1.mt-auto.text-xl {{ car.miles }}
</template>

<script setup lang="ts">
const props = defineProps({
  carData: Object,
});
</script>
