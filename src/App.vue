<template>
  <div class="h-screen">
    <Banner :logoUrl="logoUrl" :jobTitle="jobTitle" :companyName="companyName" />
    <div class="flex bg-secondary h-4/5 md:h-3/4 justify-center">
      <div class="flex h-full items-center w-full sm:w-7/8 md:w-4/5 lg:w-3/4">
        <SideNav :tabs="navTabs" @select-tab="selectTab"/>
        <div class="flex-grow h-full p-2 sm:p-4 md:p-8">
          <div class="w-full h-full flex flex-col">
            <h2 class="text-xl font-headers underline ml-8 mb-2 text-background">{{contentTitle}}</h2>
            <div class="flex-grow overflow-scroll">
              <Cover v-if="navTabs.cover.current" :text="cover" />
              <Cards v-if="navTabs.experience.current" :cards="experience" />
              <Cards v-if="navTabs.education.current" :cards="education" />
              <div v-if="navTabs.hobbies.current">
                <HobbyCard v-for="hobby in hobbies" :key="hobby.id"
                  :imageUrl="hobby.imageUrl"
                  :title="hobby.title"
                  :bulletpoints="hobby.bulletpoints"
                />
              </div>
              <div v-if="navTabs.projects.current">
                <ProjectCard v-for="project in projects" :key="project.id"
                  :imageUrl="project.imageUrl"
                  :url="project.url"
                  :title="project.title"
                  :bulletpoints="project.bulletpoints"
                />
              </div>
              <div v-if="navTabs.values.current">
                <ResponseCard v-for="value in values"
                  :key="value.id"
                  :title="value.title"
                  :text="value.text"
                  :valueImgUrl="value.imgUrl"
                  :responseImgUrl="value.responseImgUrl"
                />
              </div>
              <div v-if="navTabs.competencies.current">
                <ResponseCard v-for="competency in competencies"
                  :key="competency.id"
                  :id="competency.id"
                  :title="competency.title"
                  :text="competency.text"
                  :imgUrl="competency.imgUrl"
                  :responseImgUrl="competency.responseImgUrl"
                />
              </div>
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
import HobbyCard from './components/small/HobbyCard'
import ProjectCard from './components/small/ProjectCard'
import ResponseCard from './components/small/ResponseCard'

export default {
  components: {
    Banner,
    SideNav,
    Cover,
    Cards,
    HobbyCard,
    ProjectCard,
    ResponseCard
  },

  data () {
    return {
      logoUrl: 'https://iabm-content.s3.us-east-2.amazonaws.com/member_logos/fx-digital.png',
      jobTitle: 'Junior Full Stack Developer',
      companyName: 'FX Digital',
      navTabs: {
        cover: { id: 'cover', title: 'Cover', iconName: 'feed', current: false},
        values: { id: 'values', title: 'Values', iconName: 'question_answer', current: false},
        experience: { id: 'experience', title: 'Experience', iconName: 'work_outline', current: false},
        projects: { id: 'projects', title: 'Projects', iconName: 'precision_manufacturing', current: false},
        competencies: { id: 'competencies', title: 'Competencies', iconName: 'code', current: true},
        education: { id: 'education', title: 'Education', iconName: 'history_edu', current: false},
        hobbies: { id: 'hobbies', title: 'Hobbies', iconName: 'fingerprint', current: false},
        bonus: { id: 'bonus', title: 'Bonus', iconName: 'all_inclusive', current: false}
      },
      cover: ["Over several years I demonstrated my ability to thrive under pressure and nurture working relationships as a teacher. My success as a teacher was dependent on reliability and consistency in both meeting and setting expectations, teamwork and clear communication with students and colleagues, and excellent time management",
        "I wanted to keep learning new skills and having always had a passion for problem solving, whether in Maths Olympiads or Philosophical Logic, I decided to retrain as a developer.",
        "I excelled and enjoyed myself on the le Wagon bootcamp, and have been invited back to help the next cohorts as a teaching assistant and a lecturer. Since the bootcamp, I have deepened my understanding of the content covered through helping other students and have stretched myself with mini-projects on further content such as SQL, testing and React.",
        "In my first developer job, I am looking for a role where I will be expected to deliver but where I will have  a collaborative team and senior colleagues who I can learn with and from."
      ],
      experience: {
        lewagon: { id: 'lewagon', institution: 'le Wagon', title: 'Lecturer & Teaching Assistant', date: 'Apr 2021 - Present', enlargedOnRender: false, collapsible: true,
          imageUrl: 'https://pbs.twimg.com/profile_images/1410515616897945601/9h_npQah_400x400.jpg',
          text: 'I have been invited back to work as a teaching assistant and lecturer on the next cohorts of students. I am enjoying the challenge of deepening my understanding of core concepts.',
          quotes: [{author: 'le Wagon student', text: 'Explained all my tickets in depth. Always made sure I understood what I was stuck on. Very strong on back end, seemed to really enjoy the problem-solving aspect of coding'}],
          bulletpoints: ['core OOP principles: Inheritance, Self, Instance vs. Class Methods', 'taking responsibility to ensure all students progress well', 'reporting to batch owner']
        },
        freelancemaths: { id: 'freelancemaths', institution: 'Various', title: 'Teacher & Private Tutor', date: 'Sep 2019 - Dec 2020', enlargedOnRender: false, collapsible: true,
          imageUrl: 'https://www.sthelens.london/wp-content/themes/st-helens/assets/img/logo/crest-only.svg',
          text: 'While starting to self-educate in software, I broadened my professional educational experience with supply teaching roles in varied schools and tutoring a wide range of ages and abilities.',
          quotes: [{author: 'F Vitija, Head of Maths', text: 'Arthur slotted into the department seamlessly, quickly formed a rapport with his classes that engaged them and I’m sure he will be a valuable addition wherever he goes next'}],
          bulletpoints: ['hit the ground running on short term contracts', 'advanced concepts in A level maths']
        },
        morpeth: { id: 'morpeth', institution: 'Morpeth School', title: 'Maths Teacher', date: 'Jun 2016 - Aug 2019', enlargedOnRender: false, collapsible: true,
          imageUrl: 'https://media.glassdoor.com/sqll/1522678/morpeth-school-squarelogo-1556879312032.png',
          text: 'I am passionate about education, its social importance, maths and the joy of solving problems. Working as a teacher requires high levels of organisation, communication, intensity and consistency. I consistently received positive feedback on the positive working relationships I had with students and teaching colleagues.',
          quotes: [{author: 'J Reilly, Principal', text: 'Children enjoyed learning maths in his lessons. His sense of humour and commitment to the pupils meant that he enjoyed positive relationships with the classes that he taught. He was a supportive colleague and very well-liked by his team.'}],
          bulletpoints: ['resource and assessment design', 'singapore maths mastery curriculum development', 'lead on UKMT maths challenge']
        },
        itembase: { id: 'itembase', institution: 'itembase GmbH', title: 'Channel Partner Manager', date: 'Mar 2013 - May 2014', enlargedOnRender: false, collapsible: true,
          imageUrl: 'https://pbs.twimg.com/profile_images/378800000338305669/f4b621db543ac68c17553cd28501e7cf_400x400.png',
          text: 'After joining in an entry level sales position, I earnt responsibilities including managing key accounts and training new staff.',
          quotes: [{author: 'D Forbes, Director of Sales', text: 'After leading anglophone sales results for several months, Arthur earnt his position as one of the first two channel partner managers in this scale-up leading on strategy for strategic partnerships'}],
          bulletpoints: ['sales supported by clear communication skills', 'organise feedback from sales to product and engineering teams', 'table football champion']
        },
      },
      education: {
        lewagonbootcamp: { id: 'lewagonbootcamp', institution: 'le Wagon', title: 'Full Stack Developer Bootcamp', date: 'Jan 2021 - Mar 2021', enlargedOnRender: true,
          imageUrl: 'https://pbs.twimg.com/profile_images/1410515616897945601/9h_npQah_400x400.jpg',
          bulletpoints: ['Comprehensive understanding of OOP', 'Backend: Ruby and Rails', 'Frontend: HTML, SCSS, JS ES6, bootstrap', 'Database: SQL, PostgreSQL, SQLite']
        },
        philosopher: { id: 'philosopher', institution: 'The Philosophy Foundation', title: 'Specialist Philosopher', date: 'Sep 2019 - Dec 2019', enlargedOnRender: true,
          imageUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQGcxppqamR8iA/company-logo_200_200/0/1519898298055?e=1636588800&v=beta&t=4RwI6umMT8xJhYJqGLU4Qly8jSz7OxSqU5_Dw6LoDBM',
          bulletpoints: ['Facilitated a course of sessions for a year 5 group', 'Developed interest in non-traditional education']
        },
        pgce: { id: 'pgce', institution: 'Kingston University', title: 'PGCE Maths Teacher Training', date: 'Sep 2015 - Jun 2016', enlargedOnRender: true,
          imageUrl: 'https://d68b3152cf5d08c2f050-97c828cc9502c69ac5af7576c62d48d6.ssl.cf3.rackcdn.com/includes/img/site-cms/Kingston_University_London_logo_320-desktop-black.png',
          bulletpoints: ['Placements in Lampton School and Richmond Park Academy', 'Final essay: The benefits of teaching philosophy']
        },
        ba: { id: 'ba', institution: 'University of Leeds', title: 'Philosophy BA hons 2:1', date: 'Sep 2008 - May 2011', enlargedOnRender: true,
          imageUrl: 'https://www.logolynx.com/images/logolynx/s_f0/f073c1024ae959b8c4f9d7191c66e4c3.jpeg',
          bulletpoints: ['Specialised in metaphysics', 'Dissertation on Wittgenstein\'s theory of language', 'Swing Dance Society']
        },
        westminster: { id: 'westminster', institution: 'Westminster School', date: 'Sep 2002 - Jun 2007', enlargedOnRender: true,
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Official_rendition_of_the_Coat_of_arms_of_Westminster_School.svg/1200px-Official_rendition_of_the_Coat_of_arms_of_Westminster_School.svg.png',
          bulletpoints: ['A levels: Maths A, Further Maths B, French A, Economics B', 'Winner of the Greaze 2005']
        },
      },
      hobbies: {
        football: { id: 'football', title: 'Football',
          imageUrl: 'https://scontent.flhr4-3.fna.fbcdn.net/v/t1.18169-9/1422366_10200430542278687_785139111_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=e3f864&_nc_ohc=_-gkNigwcioAX-15Ow6&tn=BrUznbOHAYwy4zje&_nc_ht=scontent.flhr4-3.fna&oh=2f564a8061e278ddf26cb65daaa4ce1d&oe=613828C7',
          bulletpoints: ['playing and watching', 'midfield conductor', 'set piece specialist', 'goal of the season 2018']
        },
        cooking: { id: 'cooking', title: 'Cooking',
          imageUrl: 'https://scontent.flhr4-4.fna.fbcdn.net/v/t31.18172-8/20121331_10208819236270794_3226714825815576580_o.jpg?_nc_cat=100&ccb=1-4&_nc_sid=cdbe9c&_nc_ohc=FNwObZmaWicAX-zB-1Y&_nc_ht=scontent.flhr4-4.fna&oh=cca87e68b36a6d511160dfa1e1bd2024&oe=61388DCD',
          bulletpoints: ['sourdough baker', 'curry feasts', 'master of fried breakfasts', 'can cook single-handedly for 30+']
        },
        washingup: { id: 'washingup', title: 'Washing Up',
          imageUrl: 'https://www.systemhygiene.co.uk/media/catalog/product/cache/1/image/265x265/9df78eab33525d08d6e5fb8d27136e95/f/a/fairy_liquid.jpg',
          bulletpoints: ['plastic washing up bowl', 'distrust of dishwashers', 'believer in air-drying', 'rinse in cold water']
        }
      },
      projects: {
        megalithipedia: { id: 'megalithipedia', title: 'Megalithipedia', url: 'https://great-stones.herokuapp.com',
          imageUrl: 'megalithipedia.png',
          bulletpoints: ['discover megalithic sites such as Stonehenge', 'connect with fellow appreciators of the ancient', 'plan walking trips with your friends']
        },
        minesweeperreact: { id: 'minesweeperreact', title: 'Minesweeper in React', url: 'https://arfacamble.github.io/minesweeper-in-react',
          imageUrl: 'minesweeperreact.png',
          bulletpoints: ['the classic game', 'coded in ReactJS', 'avoid making explosions']
        },
        rusty: { id: 'rusty', title: 'Rusty\'s Amusements', url: 'http://rusty-amusements.herokuapp.com',
          imageUrl: 'rusty.png',
          bulletpoints: ['marketplace web app', 'Ruby on Rails', 'rent derelict amusement park rides for an unforgettable party experience']
        },
      },
      values: {
        passion: { id: 'passion', title: 'Passion',
          text: 'Since starting the bootcamp I have been excited at the prospect of learning more about programming each day. I look forward to the challenge of finding robust and flexible solutions to challenging problems'
        },
        innovation: { id: 'innovation', title: 'Innovation',
          text: 'In approaching any problem I would rather spend more time planning a comprehensive and elegant solution, for example using the principles of DDD, than execute the first thing that comes to mind and debugging until it works... for now.'
        },
        accountability: { id: 'accountability', title: 'Accountability',
          text: 'As a teacher I was responsible at any given time for the maths education of around 130 students, while managing the concerns of parents, department heads and senior leadership around that. I appreciate the need to be proactive in action and communication with all relevant stakeholders.'
        },
        humility: { id: 'humility', title: 'Humility',
          text: 'While confident in my potential as a developer and my ability given my experience level, I know that I understand only the tiniest fraction of the subject. I hope to keep up my pace of learning, collaborating with others at my level and learning from those more experienced.'
        }
      },
      competencies: {
        html: { id: 'html', title: 'HTML', imgUrl: 'https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png',
          text: 'I am confident and competent working in HTML and extended versions such as .html.erb files in rails or in the context of templating in Vue or React.'
        },
        css: { id: 'css', title: 'CSS', imgUrl: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
          text: 'I understand how to use plain CSS, and have experience using libraries and frameworks such as bootstrap and tailwind. I have also enjoyed using the SCSS file format.'
        },
        js: { id: 'js', title: 'JavaScript', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png',
          text: 'I am trained in ES6 and familiar with older syntax. I have worked in both Vue and React. However, I am also comfortable manipulating the DOM directly where necessary, as you can see with the expanding divs in the experience tab.'
        },
        responsive: { id: 'responsive', title: 'Responsive Design', imgUrl: 'https://brolik.com/blog/wp-content/uploads/2013/05/BRO_ResponsiveDesign_Main2.png',
          text: 'An area in which I still have room to improve and look forward to learning best practices, but I have designed this application site to adapt to different screen sizes.'
        }
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
    },

    transitionColor () {
      const colorDiv = document.getElementById('colorDiv')
      colorDiv.style.transition = 'height 1s'
      colorDiv.style.height ? colorDiv.style.height = `${2 * parseInt(colorDiv.style.height)}px` : colorDiv.style.height = '20px'
    }

  },

  computed: {
    contentTitle () {
      return Object.values(this.navTabs).filter(tab => tab.current)[0].title
    }
  }
}
</script>
