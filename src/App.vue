<template>
  <section>
    <single-product
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :reviews="product.reviews"
    >
    </single-product>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Mac Book Pro",
          reviews: [
            {
              id: 1,
              name: "Jack Hanks",
              rate: 5,
              description: "Der beste Laptop für mich!",
            },
            {
              id: 2,
              name: "Julia Roberts",
              rate: 2,
              description: "I don't use laptops.",
            },
          ],
        },
        {
          id: 2,
          name: "Seife Babushka Agafia",
          reviews: [
            {
              id: 1,
              name: "Mila Kunis",
              rate: 5,
              description: "Ich wasche mich nur damit!",
            },
            {
              id: 2,
              name: "Robert De Niro",
              rate: 4,
              description: "Die Seife ist vollkommen in Ordnung...",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
