<template>
  <div class="h-9 sm:h-10 w-9 sm:w-10 flex justify-center items-center rounded-full border-2">
    <span>
      <div
        :class="[current ? 'text-purple-500' : 'text-gray-500', 'h-8 w-8 flex justify-center items-center']"
      >
        <i class="material-icons-outlined">{{iconName}}</i>
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
    },

    computed: {
      divClass () {
        let classes = "h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-300"
        if (this.current) {
          classes += " border-indigo-500"
        }
        return classes
      }
    }
  }
</script>
