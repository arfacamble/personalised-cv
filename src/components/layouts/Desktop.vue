<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-headers">Desktop</h1>
      <div class="border-2 border-secondary w-24 h-24 rounded-full bg-primary flex justify-center items-center">
        <p class="text-background font-body">Colours?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appData: { required: true, type: Object }
  }
}
</script>
