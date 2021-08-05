<template>
  <div class="h-screen">
    <Banner :logoUrl="logoUrl" :jobTitle="jobTitle" />
  </div>
</template>

<script>
import Banner from './components/large/Banner'

export default {
  components: {
    Banner
  },

  data () {
    return {
      logoUrl: 'https://iabm-content.s3.us-east-2.amazonaws.com/member_logos/fx-digital.png',
      jobTitle: 'Junior Full Stack Developer',
      companyName: 'FX Digital'
    }
  }
}
</script>
