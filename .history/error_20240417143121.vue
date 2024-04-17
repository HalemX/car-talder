<template lang="pug">
.error.flex.items-center.justify-center.h-screen.flex-col
  h1.text-9xl 404
  pre {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
