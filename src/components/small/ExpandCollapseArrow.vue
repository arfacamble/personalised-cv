<template>
  <div class="cursor-pointer border-2 border-primary rounded-full h-6 w-6 flex justify-center items-center">
    <i class="material-icons-outlined text-xl text-primary">{{enlarged ? 'expand_less' : 'expand_more'}}</i>
  </div>
</template>

<script>
export default {
  props: {
    enlarged: { required: true, type: Boolean }
  }
}
</script>
