<template lang="pug">
.error
  pre {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});

const err = {}
err
</script>
