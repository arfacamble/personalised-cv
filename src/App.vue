<template>
  <div class="h-screen">
    <Banner :logoUrl="logoUrl" :jobTitle="jobTitle" :companyName="companyName" />
    <div class="flex bg-secondary h-3/5 justify-center">
      <div class="flex h-full items-center w-full sm:w-7/8 md:w-4/5 lg:w-3/4">
        <SideNav :tabs="navTabs" @select-tab="selectTab"/>
        <div class="flex-grow h-full p-2 sm:p-4 md:p-8">
          <div class="w-full h-full flex flex-col">
            <h2 class="text-xl font-headers underline ml-8 mb-2 text-background">{{contentTitle}}</h2>
            <div class="flex-grow overflow-scroll">
              <Cover v-if="navTabs.cover.current" :text="cover" />
              <Cards v-if="navTabs.experience.current" :cards="experience" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/large/Banner'
import SideNav from './components/large/SideNav'
import Cover from './components/large/Cover'
import Cards from './components/large/Cards'

export default {
  components: {
    Banner,
    SideNav,
    Cover,
    Cards
  },

  data () {
    return {
      logoUrl: 'https://iabm-content.s3.us-east-2.amazonaws.com/member_logos/fx-digital.png',
      jobTitle: 'Junior Full Stack Developer',
      companyName: 'FX Digital',
      navTabs: {
        cover: { id: 'cover', title: 'Cover', iconName: 'feed', current: true},
        values: { id: 'values', title: 'Values', iconName: 'question_answer', current: false},
        experience: { id: 'experience', title: 'Experience', iconName: 'work_outline', current: false},
        projects: { id: 'projects', title: 'Projects', iconName: 'precision_manufacturing', current: false},
        technologies: { id: 'technologies', title: 'Technologies', iconName: 'code', current: false},
        education: { id: 'education', title: 'Education', iconName: 'history_edu', current: false},
        hobbies: { id: 'hobbies', title: 'Hobbies', iconName: 'fingerprint', current: false},
        bonus: { id: 'bonus', title: 'Bonus', iconName: 'all_inclusive', current: false}
      },
      cover: ["In recent years I have demonstrated my ability to thrive under pressure and nurture working relationships as a teacher. Having always had a passion for problem solving, whether in Maths Olympiads or Philosophical Logic, I decided to retrain as a developer.",
        "I excelled and enjoyed myself on the le Wagon bootcamp, and have been invited back to help the next cohorts as a teaching assistant and a lecturer. Since the bootcamp, I have deepened my understanding of the content covered through helping other students and have stretched myself with mini-projects on further content such as SQL, testing and React.",
        "In my first developer job, I am looking for a role where I will be expected to deliver but where I will have senior colleagues who I can learn from."
      ],
      experience: {
        lewagon: { id: 'lewagon', institution: 'le Wagon', title: 'Lecturer & Teaching Assistant', date: 'Apr 2020 - Present',
          imageUrl: 'https://pbs.twimg.com/profile_images/1410515616897945601/9h_npQah_400x400.jpg',
          text: 'I have been invited back to work as a teaching assistant and lecturer on the next cohorts of students. I am enjoying the challenge of deepening my understanding of core concepts.',
          quotes: [{author: 'le Wagon student', text: 'Explained all my tickets in depth. Always made sure I understood what I was stuck on. Very strong on back end, seemed to really enjoy the problem-solving aspect of coding'}],
          bulletpoints: ['core OOP principles: Inheritance, Self, Instance vs. Class Methods', 'taking responsibility to ensure all students progress well', 'reporting to batch owner']
        },
        freelancemaths: { id: 'freelancemaths', institution: 'Various', title: 'Teacher & Private Tutor', imageUrl: 'https://www.sthelens.london/wp-content/themes/st-helens/assets/img/logo/crest-only.svg', date: 'Sep 2019 - Dec 2020', text: 'While starting to self-educate in software, I broadened my professional educational experience with supply teaching roles in varied schools and tutoring a wide range of ages and abilities.' },
        morpeth: { id: 'morpeth', institution: 'Morpeth School', title: 'Maths Teacher', imageUrl: 'https://media.glassdoor.com/sqll/1522678/morpeth-school-squarelogo-1556879312032.png', date: 'Jun 2016 - Aug 2019', text: 'I am passionate about education, its social importance, maths and the joy of solving problems. Working as a teacher requires high levels of organisation, communication, intensity and consistency. I consistently received positive feedback on the positive working relationships I had with students and teaching colleagues.' },
        itembase: { id: 'itembase', institution: 'itembase GmbH', title: 'Channel Partner Manager', imageUrl: 'https://pbs.twimg.com/profile_images/378800000338305669/f4b621db543ac68c17553cd28501e7cf_400x400.png', date: 'Mar 2013 - May 2014', text: 'After joining in an entry level sales position, I earnt responsibilities including managing key accounts and training new staff.' },
      }
    }
  },

  methods: {
    selectTab (tabSelected) {
      const tabNames = Object.keys(this.navTabs)
      tabNames.forEach(tab => {
        this.navTabs[tab].current = false
      })
      this.navTabs[tabSelected].current = true
    }
  },

  computed: {
    contentTitle () {
      return Object.values(this.navTabs).filter(tab => tab.current)[0].title
    }
  }
}
</script>
