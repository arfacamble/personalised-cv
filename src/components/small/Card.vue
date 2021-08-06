<template>
  <div class="my-2 border border-background border-opacity-20 rounded-md p-2 relative">
    <ExpandCollapseArrow
      :enlarged="enlarged"
      class="absolute bottom-2 right-2"
      @click="toggleExpanded"
    />
    <div class="flex">
      <img :src="imageUrl" :alt="`${institution} image`" class="h-20 w-20 rounded-md">
      <div class="flex-grow pl-2 flex flex-col justify-evenly">
        <h4 class="font-headers font-light text-background text-base sm:text-lg md:text-2xl">{{title}}</h4>
        <h4 class="font-headers font-bold text-background text-sm sm:text-base md:text-lg">{{institution}}</h4>
        <h4 class="font-headers italic text-background text-xs sm:text-sm md:text-base">{{date}}</h4>
      </div>
    </div>
    <p class="font-body text-background my-2">{{text}}</p>
    <transition name="more-details">
      <div v-show="enlarged">
        <ul class="list-disc pl-6">
          <li class="font-body text-background font-light text-sm" v-for="point in bulletpoints" :key="point.split(' ')[0]">{{point}}</li>
        </ul>
        <div v-for="quote in quotes" :key="quote.author" class="my-1 text-sm mx-2">
          <p class="font-body text-background italic">"{{quote.text}}"</p>
          <p class="font-body text-background font-bold text-right mr-6">{{quote.author}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ExpandCollapseArrow from './ExpandCollapseArrow'

export default {
  components: {
    ExpandCollapseArrow
  },

  props: {
    institution: { required: true, type: String },
    title: { required: true, type: String },
    imageUrl: { required: true, type: String },
    date: { required: true, type: String },
    text: { required: true, type: String },
    quotes: { required: true, type: Array },
    bulletpoints: { required: true, type: Array },
  },

  data () {
    return {
      enlarged: false
    }
  },

  methods: {
    toggleExpanded () { this.enlarged = !this.enlarged }
  }
}
</script>

<style scoped>
.more-details-enter-active, .more-details-leave-active {
  transition: height 3s ease-in-out, opacity 3s ease-in-out;
}

.more-details-enter, .more-details-leave-to {
  height: auto;
  opacity: 0;
}

.more-details-enter-to, .more-details-leave {
  height: auto;
  opacity: 1;
}
</style>
