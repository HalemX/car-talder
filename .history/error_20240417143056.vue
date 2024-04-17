<template lang="pug">
.error.flex.items-center.justify-center.
  pre {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
