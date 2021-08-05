<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="border border-background ml-2 p-2 rounded-full md:rounded-2xl" aria-label="Sidebar">
    <a
      v-for="tab in tabs"
      :key="tab.id"
      :data-id="tab.id"
      :class="[tab.current ? 'text-primary cursor-default' : 'text-background hover:text-black cursor-pointer', 'flex items-center py-1 text-sm font-medium rounded-md']"
      :aria-current="tab.current ? 'page' : undefined"
      @click.prevent="setActiveTab"
    >
      <NavIcon
        :iconName="tab.iconName"
        :current="tab.current"
      />
      <span class="truncate flex-grow hidden md:block font-body text-lg mx-4">
        {{ tab.title }}
      </span>
    </a>
  </nav>
</template>

<script>
  import NavIcon from '../small/NavIcon'

  export default {
    components: {
      NavIcon
    },

    props: {
      tabs: {
        required: true,
        type: Object
      }
    },

    methods: {
      setActiveTab (event) {
        this.$emit('select-tab', event.currentTarget.dataset.id)
      }
    }
  }
</script>
