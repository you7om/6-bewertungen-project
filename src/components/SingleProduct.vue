<template>
  <section>
    <h3>{{ name }}</h3>
    <h4>Durchschnittliche Bewertung {{ middleRate }}/5</h4>
    <img :src="productImage" :alt="name" class="productPics" />
    <product-review
      v-for="review in reviews"
      :key="review.id"
      :username="review.name"
      :rate="review.rate"
      :description="review.description"
    >
    </product-review>
    <review-form @set-data="setEvaluationData"></review-form>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    reviews: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productImage() {
      // Entfernt alle Leerzeichen
      const imageName = this.name.replace(/\s+/g, "");
      return `/bilder/${imageName}.jpg`;
    },
    middleRate() {
      if (!this.reviews.length) return 0; // Falls keine Bewertungen vorhanden
      const sum = this.reviews.reduce((acc, review) => acc + review.rate, 0);
      return (sum / this.reviews.length).toFixed(1); // auf 1 Nachkommastelle runden
    },
  },
  methods: {
    setEvaluationData(name, rate, description) {
      const newEvaluation = {
        id: new Date().toISOString(),
        name: name,
        rate: rate,
        description: description,
      };
      this.reviews.push(newEvaluation);
    },
  },
};
</script>

<style>
section {
  max-width: 600px;
  margin: 2rem auto;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
}
h3 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
h4 {
  text-align: center;
  color: #333;
  margin: 0 auto 1rem;
  background-color: #f1e1e1;
  border-radius: 12px;
  width: 400px;
}
.productPics {
  width: 50%;
  height: auto;
}
</style>
