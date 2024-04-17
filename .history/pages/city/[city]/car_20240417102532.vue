<template lang="pug">
.mt-32.flex
  // Car sidebar
  .shadow.border.w-64.mr-10.z-30(class="h-[190px]")
    .p-5.flex.justify-between.relative.cursor-pointer.border-b
      h3 Location
      h3.text-blue-400.capitalize Toronto
    .p-5.flex.justify-between.relative.cursor-pointer.border-b
      h3 Make
      h3.text-blue-400.capitalize Toyota
    .p-5.flex.justify-between.relative.cursor-pointer
      h3 Price
      h3.text-blue-400.capitalize 
  // Car sidebar
  // Car Cards
  .w-full
    <NuxtPage />
  // Car Cards 
</template>

<script setup lang="ts">
const route = useRoute();
const toTitleCase = useToTitle();

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } in ${toTitleCase(route.params.city)} `,
});
</script>
