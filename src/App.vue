<template>
  <div>
    <Mobile class="md:hidden" :appData="appData" />
    <Desktop class="hidden md:block" :appData="appData" />
  </div>
</template>

<script>
import Mobile from './components/layouts/Mobile'
import Desktop from './components/layouts/Desktop'

export default {
  components: {
    Mobile,
    Desktop
  },

  data () {
    return {
      appData: {
        logoLink: 'https://iabm-content.s3.us-east-2.amazonaws.com/member_logos/fx-digital.png'
      }
    }
  }
}
</script>
