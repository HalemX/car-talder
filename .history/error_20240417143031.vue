<template lang="pug">
.error.flex
  pre {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
