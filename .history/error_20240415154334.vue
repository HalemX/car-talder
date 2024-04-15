<template>
<div class="error">
  <pre>{{ error }}</pre>
</div>
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
