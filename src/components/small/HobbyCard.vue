<template>
  <div class="my-2 border border-background border-opacity-20 rounded-md p-2">
    <div class="flex flex-col sm:flex-row">
      <img :src="imageUrl" alt="" class="object-cover w-full sm:w-2/4 rounded-md">
      <div class="pl-2 self-start sm:self-center mt-2 sm:mt-0">
        <h4 class="font-headers font-light text-background text-base sm:text-lg md:text-2xl">{{title}}</h4>
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
    bulletpoints: { required: true, type: Array }
  }
}
</script>
