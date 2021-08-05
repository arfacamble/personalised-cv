<template>
  <div class="h-2/5 bg-primary flex justify-center">
    <div class="h-full w-full sm:w-5/6 md:w-3/4 lg:w-3/5 relative">
      <div class="h-full w-2/3 md:w-3/5 flex flex-col justify-between px-4">
        <h1 class="mt-8 text-3xl font-headers">Arthur Campbell's</h1>
        <p class="text-lg font-body self-center">application for</p>
        <h2 class="text-3xl font-headers self-end">{{jobTitle}}</h2>
        <img :src="logoUrl" :alt="companyName" class="flex-grow-0 self-center">
      </div>
      <img src="my_face.png" alt="Arthur's face" class="absolute bottom-0 right-0 h-3/4 md:h-5/6">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoUrl: { required: true, type: String },
    jobTitle: { required: true, type: String },
    companyName: { required: true, type: String },
  }
}
</script>
