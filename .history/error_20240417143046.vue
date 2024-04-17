<template lang="pug">
.error.flex.items-center
  pre {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
