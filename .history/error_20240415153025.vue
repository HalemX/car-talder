<template lang="pug">
.error
  h1 error
</template>
<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
  },
});
console.log(">>>>>>>>>>>>>error", props.error);
</script>
