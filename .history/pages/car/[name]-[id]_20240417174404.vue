<template lang="pug">
// CAR DETAIL PAGE
div() 
  .mt-10 
    img.w-full(:src="car.url" alt="")
    h1.mt-10.text-4xl {{ car.name }}
    .text-slate-500.flex.text-lg.mt-3.border-b.pb-5.justify-between
      .flex
        p.mr-2 {{ car.seats }} seats
        p.mr-2 |
        p.mr-2 {{ car.miles }} miles
      div
        p.font-bold.text-2xl ${{ car.price }}
  // CAR ATTRIBUTES
  .mr-10.mt-5.border-b.pb-5
    .flex.text-lg.mt-2(v-for="feat in car.features" :key="feat")
      p.rounded.text-lime-800.mr-3 ✔
      p {{ feat }}
  // CAR ATTRIBUTES
  // CAR DESCRISPTION
  .mt-5
    p.mb-10 {{ car.description }}
  // CAR DESCRISPTION
  // CAR CONTACT
  .mt-10
    .flex.justify-between(class="w-[600px]")
      input.border.p-1(type="text" placeholder="Name")
      input.border.p-1(type="text" placeholder="Email")
      input.border.p-1(type="text" placeholder="Phone")
    .flex.mt-4(class="w-[600px]")
      textarea.border.p-1.w-full(placeholder="Message")
    button.bg-blue-400.text-white.px-10.py-3.rounded.mt-4 Submit
  // CAR CONTACT
  // CAR DETAIL PAGE
</template>

<script setup lang="ts">
const route: any = useRoute();
const { toTitleCase } = useToTitle();
const { cars } = useCars();

useHead({
  title: toTitleCase(route.params.name),
});

definePageMeta({
  layout: "custom",
});

const car = computed(() => {
  return cars.find((carEle) => {
    return carEle.id === parseInt(route.params.id);
  });
});

if (!car) {
  throw createError({
    statusCode: "404,
    message: "Car with id"
  });
}
</script>
