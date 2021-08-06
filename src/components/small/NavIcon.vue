<template>
  <div class="h-8 sm:h-10 w-8 sm:w-10 flex justify-center items-center rounded-full border-2">
    <span>
      <div
        class="flex justify-center items-center"
      >
        <i class="material-icons-outlined text-xl sm:text-2xl">{{iconName}}</i>
      </div>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      iconName: {
        required: true,
        type: String
      },
      current: {
        required: true,
        type: Boolean
      }
    }
  }
</script>
