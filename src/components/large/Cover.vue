<template>
  <div>
    <div v-for="para in text" :key="para.split(' ')[0]" class="font-body text-background mb-2">{{para}}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: { required: true, type: Array }
  }
}
</script>
