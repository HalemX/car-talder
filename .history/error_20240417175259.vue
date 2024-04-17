<template lang="pug">
.error.flex.items-center.justify-center.h-screen.flex-col
  h1.text-9xl {{ error.statusCode }}
  p.mt-7.text-4xl {{ error.message}}
  nuxtLink(class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white" to="/") Go Back Home
  // pre {{ error }}
</template>
<script setup lang="ts">
// defineProps({
//   error: Object,
// });

const error = useError();

const handleError = () => {
  clearError9
}
</script>
