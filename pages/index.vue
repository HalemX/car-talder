<template lang="pug">
div(class="h-screen w-100 bg-no-repeat bg-cover bg-bottom relative bg-[url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg')]")
  div(class="z-10 absolute w-full h-full flex justify-center items-center")
    div(class="text-center w-1/2") 
      h1(class="text-8xl font-serif mb-10 text-white") Find your drive 
      // Home Search
      div(class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto" :class="searchErr? 'border-red-500 border': ''")
        input(type="text" placeholder="Search by city..." class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" v-model="city")
        button(class="px-10 text-white" :class="searchErr? 'bg-red-600' : 'bg-sky-500' " @click="handleSearch") Search
      // Home Search
  div(class="z-1 absolute w-full h-full bg-black opacity-50")
</template>

<script setup lang="ts">
useHead({
  title: "Cartrader",
});

const city = ref("");
const searchErr = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (searchErr.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};
</script>
