<template lang="pug">
.error
  p {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
