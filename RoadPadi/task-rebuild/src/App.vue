<template>
<div id="app">
    <v-main>
      <router-view/>
    </v-main>
</div>    
</template>

<script>
// function showBrowserWidth(){
//   const width = window.innerWidth
//   document.querySelector('form-container').innerText = `width: ${width}px`
// }
// window.onload = showBrowserWidth
// window.onresize = showBrowserWidth
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>

body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
