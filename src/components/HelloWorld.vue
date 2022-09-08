<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <div class="greetings">
    <h3 class="title">
      Project created with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>,
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> and
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.title {
  width: 80%;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
