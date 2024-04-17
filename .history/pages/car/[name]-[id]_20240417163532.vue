<template lang="pug">
// CAR DETAIL PAGE
.mt-10
  img.w-full(src="https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg" alt="")
  h1.mt-10.text-4xl Volvo 3XT
  .text-slate-500.flex.text-lg.mt-3.border-b.pb-5.justify-between
    .flex
      p.mr-2 5 seats
      p.mr-2 |
      p.mr-2 67,444 miles
    div
      p.font-bold.text-2xl $25,555
// CAR ATTRIBUTES
.mr-10.mt-5.border-b.pb-5
  .flex.text-lg.mt-2
    p.rounded.text-lime-800.mr-3 ✔
    p Leather Interior
// CAR ATTRIBUTES
// CAR DESCRISPTION
.mt-5
  p.mb-10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequuntur, et saepe sequi, ipsum quisquam iste autem quas vel aperiam laboriosam dolorum vero tempore placeat, asperiores alias magni. Nulla, dolores.
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
const route = useRoute();
const { toTitleCase } = useToTitle();

useHead({
  title: toTitleCase(route.params.name),
});

definePageMeta({
  layout: "custom",
});

// const { cars } = useCars();
// const car = cars.filter((carEle) => {
//   return carEle.id === parseInt(route.params.id);
// });

console.log(parseInt(typeof route.params.id);
</script>
