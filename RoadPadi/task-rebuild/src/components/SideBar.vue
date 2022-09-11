<template>
  <div class="sidebar flex justify-center  bg-[#004aad]  ">
    <div class="menu-items   px-10 pt-10">
        <h1 class="text-white font-serif line-heightfont-bold font-medium loading-[23px] text-[19px]">Hey!</h1>
    <div class="w-35  mb-12">
      <h3 class=" font-serif text-lg text-white">Let's Get You Set</h3>
      <p class="text-white font-serif font-bold text-medium">We’re excited to have you!.</p>
      <p class=" text-white font-serif font-bold text-medium">We just need some more </p>
      <p class=" text-white font-serif font-bold text-medium">information</p>
    </div>
     
      <div class="item-container"  v-if="pageIsActive">
        <div class="item-inner-container border-white-200 ">
          <p class="text-white  text-medium">1</p>
        </div>
    <h4 class="text-white text-medium ml-5">Product Selection</h4>
    </div>

    <div :class="['item-container', 'cursor-pointer', pageIsActive == 'mainbar' ? 'active': '']" @click="routeToPage('mainbar')"  >
        <div class="item-inner-container border-white-200 ">
          <p class="text-white  text-medium">2</p>
        </div>
        
    <h4 class="text-white text-medium ml-5">Brand Identity</h4>
    </div>
    
    
    <div :class="['item-container', 'cursor-pointer', pageIsActive == 'address' ? 'active': '']" @click="routeToPage('address')">
        <div class="item-inner-container border-white-200 ">
          <p class="text-white  text-medium">3</p>
        </div>
    <h4 class="text-white text-medium ml-5">Address</h4>
    </div>

     
    <div :class="['item-container', 'cursor-pointer', pageIsActive == 'contact' ? 'active': '']"  @click="routeToPage('contact')" >
        <div class="item-inner-container border-white-200 ">
          <p class="text-white  text-medium">4</p>
        </div>
    <h4 class="text-white text-medium ml-5">Contact</h4>
    </div>
     
    <div :class="['item-container', 'cursor-pointer', pageIsActive == 'verification' ? 'active': '']" @click="routeToPage('verification')">
        <div class="item-inner-container border-white-200 ">
          <p class="text-white  text-medium">5</p>
        </div>
    <h4 class="text-white text-medium ml-5">Verification</h4>
    </div>
     <div :class="['item-container', 'cursor-pointer', pageIsActive == 'account' ? 'active': '']" @click="routeToPage('account')">
        <div class="item-inner-container border-white-200 ">
          <p class="text-white  text-medium">6</p>
        </div>
    <h4 class="text-white text-medium ml-5">Account Details</h4>
    </div>
     </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    pageIsActive: 'mainbar'
  }
},
methods:{
  routeToPage(type){
    if(type === 'mainbar'){
      this.pageIsActive = 'mainbar';
      this.$router.push({name: 'mainbar'})
    }else
    if(type === 'address'){
      this.pageIsActive = 'address'
      this.$router.push({name: 'address'})
    }else
    if(type === 'contact'){
      this.pageIsActive = 'contact'
      this.$router.push({name: 'contact'})
    }else
    if(type === 'verification'){
      this.pageIsActive = 'verification'
      this.$router.push({name: 'verification'})
    }else
    if(type === 'account'){
      this.pageIsActive = 'account'
      this.$router.push({name: 'account'})
    }
   
  },
  
}
}
</script>

<style lang="scss">

.item-container{
   width: 15rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom : 1rem;
}

.item-inner-container{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
}
.active{
  color: red;
  font-size: 30px;
  font-weight: bold;
}

.active > .item-inner-container {
  border: 2px solid white;
}
</style>