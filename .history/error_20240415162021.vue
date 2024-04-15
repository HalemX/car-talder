<template lang="pug">
.error
  pre {{ error }}
</template>
<script setup lang="ts">
const props = defineProps({
  error: Object as () => NuxtError
})
</script>
