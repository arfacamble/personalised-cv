<template>
  <div>
    <CVCard
      v-for="card in cards"
      :key="card.id"
      :id="`${card.id}-card`"
      :cardId="card.id"
      :institution="card.institution"
      :title="card.title"
      :date="card.date"
      :imageUrl="card.imageUrl"
      :text="card.text"
      :quotes="card.quotes"
      :bulletpoints="card.bulletpoints"
      :enlargedOnRender="card.enlargedOnRender"
      :collapsible="card.collapsible"
    />
    <CVCard
      v-for="card in cards"
      :key="`${card.id}2`"
      :id="`${card.id}-card-hidden`"
      :cardId="`${card.id}-hidden`"
      :institution="card.institution"
      :title="card.title"
      :date="card.date"
      :imageUrl="card.imageUrl"
      :text="card.text"
      :quotes="card.quotes"
      :bulletpoints="card.bulletpoints"
      class="mt-24"
      :hidden="true"
      :enlargedOnRender="true"
    />
  </div>
</template>

<script>
import CVCard from '../small/CVCard'

export default {
  components: {
    CVCard
  },

  props: {
    cards: { required: true, type: Object }
  }
}
</script>
