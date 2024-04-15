<template lang="pug">
.error
  pre {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: {
    type: Object
});
console.log(">>>>>>>>>>>>>error", props.error);
</script>
