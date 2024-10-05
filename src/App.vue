<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh; 
  width: 80vw;
}

.home {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%; 
  max-width: 1500px; 
}
</style>
