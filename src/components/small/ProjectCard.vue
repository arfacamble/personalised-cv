<template>
  <div class="my-2 border border-background border-opacity-20 rounded-md p-2">
    <div class="flex flex-col lg:flex-row">
      <a :href="url" target="blank" class="w-full lg:w-1/2">
        <img :src="imageUrl" alt="" class="object-cover w-full rounded-md">
      </a>
      <div class="pl-2 self-start sm:self-center">
        <h4 class="font-headers font-light text-background text-base sm:text-lg md:text-2xl">
          <a :href="url" target="blank">{{title}}</a>
        </h4>
        <ul class="list-disc pl-6">
          <li class="font-body text-background font-light text-sm" v-for="point in bulletpoints" :key="point.split(' ')[0]">{{point}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: { required: true, type: String },
    title: { required: true, type: String },
    text: { required: true, type: String },
    url: { type: String },
    bulletpoints: { required: true, type: Array }
  }
}
</script>
