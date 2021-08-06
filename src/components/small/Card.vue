<template>
  <div class="my-2 border border-background rounded-md p-2">
    <div class="flex">
      <img :src="imageUrl" :alt="`${institution} image`" class="h-20 w-20 rounded-md">
      <div class="flex-grow pl-2 flex flex-col justify-evenly">
        <h4 class="font-headers font-light text-background text-base sm:text-lg md:text-2xl">{{title}}</h4>
        <h4 class="font-headers font-bold text-background text-sm sm:text-base md:text-lg">{{institution}}</h4>
        <h4 class="font-headers italic text-background text-xs sm:text-sm md:text-base">{{date}}</h4>
      </div>
    </div>
    <p class="font-body text-background my-2">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    institution: { required: true, type: String },
    title: { required: true, type: String },
    imageUrl: { required: true, type: String },
    date: { required: true, type: String },
    text: { required: true, type: String },
  }
}
</script>

// lewagon: { id: 'lewagon',
              institution: 'le Wagon',
              title: 'Lecturer & Teaching Assistant',
              image: 'https://pbs.twimg.com/profile_images/1410515616897945601/9h_npQah_400x400.jpg',
              date: 'Apr 2020 - Present',
              text: 'I have been invited back to work as a teaching assistant and lecturer on the next cohorts of students. I am enjoying the challenge of deepening my understanding of core concepts.'
            }
