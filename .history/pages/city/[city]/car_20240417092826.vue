<template lang="pug">
.mx-auto.mt-4.max-w-7xl.space-y-4.px-4.pb-16(class="xs:px-8 sm:px-10 lg:px-16 w-3/5")
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

useHead({
  title: `Cars toTitleCase() ${route.params.city}`,
});

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
</script>
