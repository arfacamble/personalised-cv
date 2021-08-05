<template>
  <div class="h-screen">
    <Banner :logoUrl="logoUrl" :jobTitle="jobTitle" />
    <div class="flex bg-secondary h-3/5 justify-center">
      <div class="flex h-full items-center w-full sm:w-7/8 md:w-4/5 lg:w-3/4">
        <SideNav :tabs="navTabs" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/large/Banner'
import SideNav from './components/large/SideNav'

export default {
  components: {
    Banner,
    SideNav
  },

  data () {
    return {
      logoUrl: 'https://iabm-content.s3.us-east-2.amazonaws.com/member_logos/fx-digital.png',
      jobTitle: 'Junior Full Stack Developer',
      companyName: 'FX Digital',
      navTabs: {
        home: { id: 'home', title: 'Cover', iconName: 'feed', current: true},
        values: { id: 'values', title: 'Values', iconName: 'question_answer', current: false},
        projects: { id: 'projects', title: 'Projects', iconName: 'precision_manufacturing', current: false},
        technologies: { id: 'technologies', title: 'Technologies', iconName: 'code', current: false},
        education: { id: 'education', title: 'Education', iconName: 'history_edu', current: false},
        hobbies: { id: 'hobbies', title: 'Hobbies', iconName: 'fingerprint', current: false},
        bonus: { id: 'bonus', title: 'Bonus', iconName: 'all_inclusive', current: false}
      }
    }
  }
}
</script>
