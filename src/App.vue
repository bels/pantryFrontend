<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <NewItemForm />
  </div>
</template>

<script setup>
  import NewItemForm from './components/NewItemForm.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>