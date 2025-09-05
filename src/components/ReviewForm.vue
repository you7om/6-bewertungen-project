<template>
  <section>
    <form @submit.prevent="submitData">
      <input
        type="text"
        placeholder="Dein Name"
        v-model="enteredName"
        required
      />
      <input
        type="number"
        placeholder="Gebe dem Produkt 1 bis 5 Sterne"
        min="1"
        max="5"
        v-model="enteredNumber"
        required
      />
      <textarea
        placeholder="Schreibe deine Bewertung!"
        v-model="enteredText"
        required
      ></textarea>
      <button>Jetzt Bewerten</button>
    </form>
  </section>
</template>

<script>
export default {
  emit: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredNumber: "",
      enteredText: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "set-data",
        this.enteredName,
        this.enteredNumber,
        this.enteredText
      );
    },
  },
};
</script>

<style>
form input,
textarea {
  display: block;
  width: 90%;
  margin: 0.8rem 0;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s ease;
}
form textarea {
  width: 90%;
}
button:hover {
  background: rgb(225, 221, 221);
}
</style>
