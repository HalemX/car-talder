<template lang="pug">
.error.flex.items-center.justify-center.h-screen.flex-col
  h1
  pre {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
