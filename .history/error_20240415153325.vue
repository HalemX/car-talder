<template lang="pug">
.error
  h1 {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
