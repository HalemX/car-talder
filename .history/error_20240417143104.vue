<template lang="pug">
.error.flex.items-center.justify-center.h-screen.flex-col
  pre {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
