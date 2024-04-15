<template lang="pug">
.error
   {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
