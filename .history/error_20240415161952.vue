<template lang="pug">
.error
  pre {{ error }}
</template>
<script setup lang="ts">
const defineProps({
  error: Object,
});
</script>
