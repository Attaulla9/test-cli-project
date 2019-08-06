<template>
  <section id="app" class="section">
    <p class="has-text-centered subtitle">Thank you, you slot has been booked for {{slotData}}</p>
    <p class="mBot has-text-centered">Please answer the below questions related to your booking.</p>
    <Form />
  </section>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "app",
  components: {
    Form
  },
  data() {
    return {
      slotData: "Test Slot Data"
    };
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search.substring(1));
    this.slotData = urlParams.get("slotData");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.notices .toast {
  opacity: unset !important;
}

.notices .toast.is-warning {
  font-weight: 500;
}

.mBot {
  margin-bottom: 6px;
}
</style>
