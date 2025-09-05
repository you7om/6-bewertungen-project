import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ProductReview from "./components/productReview.vue";
import SingleProduct from "./components/SingleProduct.vue";
import ReviewForm from "./components/ReviewForm.vue";

const app = createApp(App);

app.component("product-review", ProductReview);
app.component("single-product", SingleProduct);
app.component("review-form", ReviewForm);

app.mount("#app");
