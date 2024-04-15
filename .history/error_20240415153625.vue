<template lang="pug">
.error
  {{ error }}
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>

function defineProps(arg0: { error: ObjectConstructor; }) {
  throw new Error("Function not implemented.");
}
