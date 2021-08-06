<template>
  <div>
    <Card
      v-for="card in cards"
      :key="card.id"
      :institution="card.institution"
      :title="card.title"
      :date="card.date"
      :imageUrl="card.imageUrl"
      :text="card.text"
    />
  </div>
</template>

<script>
import Card from '../small/Card'

export default {
  components: {
    Card
  },

  props: {
    title: { required: true, type: String },
    cards: { required: true, type: Object }
  }
}
</script>
