<template>
  <div class="my-2 p-2 pb-4 flex flex-col border-b border-primary border-opacity-50">
    <div class="mb-2 flex items-center pl-2 pb-2">
      <img v-if="imgUrl" :src="imgUrl" :alt="id + '-icon'" class="h-12 w-12 mr-2 rounded-md object-cover object-center">
      <p class="font-headers text-xl font-light text-background">{{title}}</p>
    </div>
    <div class="w-4/5 self-end flex border border-background border-opacity-20 rounded-md p-2">
      <p class="font-body italic text-background text-right">{{text}}</p>
      <img v-if="responseImgUrl" :src="responseImgUrl" :alt="id + '-img'" class="h-16 w-16 object-cover object-center">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: { required: true, type: String },
      title: { required: true, type: String },
      text: { required: true, type: String },
      imgUrl: { type: String },
      responseImgUrl: { type: String },
    }
  }
</script>
