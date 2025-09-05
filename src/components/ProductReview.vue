<template>
  <div>
    <h3>Username: {{ username }}</h3>
    <p>Bewertung: {{ rate }}/5</p>
    <p>Beschreibung: {{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
