<template>
<div class="dashboard">
<SideBar />
<div class="content bg-[#FDFFFC] w-full ">
 <router-view/>
</div>
</div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'

  export default {
    name: 'Home',

    components: {
    SideBar,
},
  }
</script>
<style scoped>
.dashboard{
 display: grid;
 grid-template-columns: 2fr 5fr;
 height: 100vh;
 width: 100%;
}

</style>
